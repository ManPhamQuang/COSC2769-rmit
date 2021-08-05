import React from "react";

const VideoRoomNavBar = ({ roomName, handleLogout, setShowChat }) => {
    return (
        <div className="bg-gray-100 h-16 py-4 px-10 flex justify-between items-center text-base absolute bottom-0 w-full">
            <div className="flex items-center font-medium text-indigo-900">
                <h1 className="text-gray-900 text-sm">{roomName}</h1>
            </div>
            <div className="flex items-center">
                <div>
                    <button className="flex items-center ml-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                            />
                        </svg>
                        <span className="text-sm text-gray-900">Mute</span>
                    </button>
                </div>
                <div>
                    <button className="flex items-center ml-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                        </svg>
                        <span className="text-sm text-gray-900">
                            Stop Video
                        </span>
                    </button>
                </div>
                <div>
                    <button
                        className="flex items-center ml-4"
                        onClick={() => setShowChat((showChat) => !showChat)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-1 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                            />
                        </svg>
                        <span className="text-sm text-gray-900">Chat</span>
                    </button>
                </div>
            </div>
            <div className=" flex items-center ">
                <button
                    className="bg-red-600 text-white rounded-md py-2 px-4 cursor-pointer"
                    onClick={handleLogout}
                >
                    Leave Room
                </button>
            </div>
        </div>
    );
};

export default VideoRoomNavBar;
