import ChatItem from "./ChatItem";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
const ChatAPI = require("twilio-chat");
import { getTwilioToken } from "../utils/API";

function Chat({ username, roomName, token, isHidden, closeChat }) {
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [channel, setChannel] = useState(null);
    const [text, setText] = useState("");
    const bottomChat = useRef(null);

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
            bottomChat.current.scrollIntoView({ behavior: "smooth" });
        });

        try {
            const channel = await client.getChannelByUniqueName(roomName);
            joinChannel(channel);
            setChannel(channel);
        } catch (err) {
            try {
                const channel = await client.createChannel({
                    uniqueName: roomName,
                    friendlyName: roomName,
                });
                joinChannel(channel);
            } catch {
                throw new Error(
                    "Unable to create channel, please reload this page"
                );
            }
        }
        // useEffect should return a clean up function if components ever unmount
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
        bottomChat.current.scrollIntoView({ behavior: "smooth" });
    };

    const sendMessage = () => {
        if (text) {
            channel.sendMessage(String(text).trim());
            setText("");
            bottomChat.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage();
    };

    return (
        <div
            className={`bg-white h-screen w-96 border border-[#E4E7E9] ${
                isHidden ? "hidden" : "flex"
            } flex-col`}
        >
            <div className="bg-[#F4F4F6] px-3 py-5 border-b border-[#E4E7E9] shadow-sm">
                <div className="flex justify-between">
                    <p className="font-bold">Chat</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 fill-current text-gray-500 cursor-pointer hover:text-gray-700 transition"
                        onClick={closeChat}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
            </div>
            <div
                className={`px-2 py-4 space-y-5 h-[70vh] border-b border-[#E4E7E9] shadow-sm ${
                    loading ? "overflow-hidden" : "overflow-auto"
                }`}
            >
                {loading && (
                    <div className="flex items-center justify-center h-full">
                        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 text-center"></div>
                    </div>
                )}
                {messages.map((message, index) => (
                    <ChatItem
                        key={index}
                        message={message}
                        username={username}
                    />
                ))}
                <div ref={bottomChat}></div>
            </div>
            <div className="space-x-4">
                <form className="px-3" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Type Message"
                            onChange={(e) => updateText(e.target.value)}
                            value={text}
                            className="mt-5 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md pr-8"
                        />
                        <button className="ml-auto focus:outline-none focus:rotate-90 rotate-45 hover:rotate-90 duration-300 absolute right-0 bottom-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Chat;
