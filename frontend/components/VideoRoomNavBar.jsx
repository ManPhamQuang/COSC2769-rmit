import React, { useState } from "react";

const VideoRoomNavBar = ({ roomName, handleLogout, setShowChat, room }) => {
  const [isVideoEnable, setIsVideoEnable] = useState(true);
  const [isAudioEnable, setIsAudioEnable] = useState(true);

  const videoBtnOnClick = (e) => {
    const isEnabled = !isVideoEnable;
    if (room) {
      room.localParticipant.videoTracks.forEach((track) => {
        const videoTrack = track.track;
        isEnabled ? videoTrack.enable() : videoTrack.disable();
      });
    }
    setIsVideoEnable(isEnabled);
  };

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
            <span className="text-sm text-gray-900">
              {isAudioEnable ? "Mute" : "Unmute"}
            </span>
          </button>
        </div>
        <div>
          <button className="flex items-center ml-4" onClick={videoBtnOnClick}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="video"
              className="h-5 w-5 mr-2 text-gray-600"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"
              ></path>
            </svg>
            <span className="text-sm text-gray-900">
              {isVideoEnable ? "Stop Video" : "Open Video"}
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
