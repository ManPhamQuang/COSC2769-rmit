import ChatItem from "./ChatItem";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
const ChatAPI = require("twilio-chat");
import { getTwilioToken } from "../utils/API";

function Chat({ username, roomName, token }) {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [channel, setChannel] = useState(null);
  const [text, setText] = useState("");

  const room = roomName;
  const email = username;

  let scrollDiv = useRef(null);
  useEffect(async () => {
    setLoading(true);

    // Chat Logic
    const client = await ChatAPI.Client.create(token);
    client.on("tokenAboutToExpire", async () => {
      const token = await getTwilioToken(username, roomName);
      client.updateToken(token);
    });

    client.on("tokenExpired", async () => {
      const token = await getTwilioToken(username, roomName);
      client.updateToken(token);
    });

    client.on("channelJoined", async (channel) => {
      // getting list of all messages since this is an existing channel
      const newMessages = await channel.getMessages();
      setMessages(newMessages.items || []);
    });

    try {
      const channel = await client.getChannelByUniqueName(room);
      joinChannel(channel);
      setChannel(channel);
    } catch (err) {
      try {
        const channel = await client.createChannel({
          uniqueName: room,
          friendlyName: room,
        });
        joinChannel(channel);
      } catch {
        throw new Error("Unable to create channel, please reload this page");
      }
    }
  }, []);

  const updateText = (e) => setText(e);

  const joinChannel = async (channel) => {
    if (channel.channelState.status !== "joined") {
      await channel.join();
    }

    setChannel(channel);
    setLoading(false);

    channel.on("messageAdded", function (message) {
      handleMessageAdded(message);
    });
  };

  const handleMessageAdded = (message) => {
    setMessages((messages) => [...messages, message]);
    scrollToBottom();
  };

  const scrollToBottom = () => {
    const scrollHeight = scrollDiv.current.scrollHeight;
    const height = scrollDiv.current.clientHeight;
    const maxScrollTop = scrollHeight - height;
    scrollDiv.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };

  const sendMessage = () => {
    if (text) {
      setLoading(true);
      channel.sendMessage(String(text).trim());
      setText("");
      setLoading(false);
    }
  };

  return (
    <div>
      <p className="text-2xl">Chat Message</p>
      <div ref={scrollDiv} className="w-2/3">
        <div>
          {messages &&
            room !== "chat" &&
            messages.map((message, index) => (
              <ChatItem key={index} message={message} email={email} />
            ))}
        </div>
        {room !== "chat" && (
          <div className="flex space-x-4 my-4">
            <input
              type="text"
              placeholder="Type Message"
              onChange={(e) => updateText(e.target.value)}
              value={text}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
