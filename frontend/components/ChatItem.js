import React from "react";
import dayjs from "dayjs";
function ChatItem({ message, username }) {
    const isOwnMessage = message.author === username;
    console.log(message);
    return (
        <div className="space-y-2">
            <div className="flex text-xs text-gray-500 justify-between">
                <p>
                    {message.author} {isOwnMessage && " (You)"}
                </p>
                <p>
                    {dayjs(message.dateCreated.toISOString()).format("hh:mm a")}
                </p>
            </div>
            <div className="flex">
                <p
                    className={`rounded-xl p-3 text-sm 
                      ${isOwnMessage ? "bg-[#E1E3EA]" : "bg-[#CCE4FF]"}
                      ${isOwnMessage && "ml-auto"} 
                    `}
                >
                    {message.body}
                </p>
            </div>
        </div>
    );
}

export default ChatItem;
