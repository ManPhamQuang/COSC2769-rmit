import ChatItem from "./ChatItem";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
const ChatAPI = require("twilio-chat");
import { getTwilioToken } from "../utils/API";

function Chat({ username, roomName }) {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [channel, setChannel] = useState(null);
  const [text, setText] = useState("");

  const room = roomName;
  const email = username;

  let scrollDiv = useRef(null);
  useEffect(async () => {
    let token = "";

    setLoading(true);

    try {
      token = await getTwilioToken(username, roomName);
      //   console.log(token)
    } catch {
      throw new Error("Unable to get token, please reload this page");
    }

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
      console.log(newMessages);
      // messages.push(newMessages.items || [])
      setMessages(newMessages.items || []);
      // scrollToBottom();
    });

    try {
      const channel = await client.getChannelByUniqueName(room);
      console.log(channel);
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
      console.log(String(text).trim());
      setLoading(true);
      channel.sendMessage(String(text).trim());
      setText("");
      setLoading(false);
    }
  };

  return (
    <div>
      <p className="text-2xl">Chat Message</p>
      <div className="chatContainer" ref={scrollDiv}>
        <div className="chatContents">
          {messages &&
            room !== "chat" &&
            messages.map((message, index) => (
              <ChatItem key={index} message={message} email={email} />
            ))}
        </div>
        {room !== "chat" && (
          <div className="chatFooter">
            <input
              type="text"
              placeholder="Type Message"
              onChange={(e) => updateText(e.target.value)}
              value={text}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
