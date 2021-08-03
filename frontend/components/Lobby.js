import React from "react";

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}) => {
  return (
    <form onSubmit={handleSubmit} className="w-1/3 mt-10 mx-auto">
      <h1 className="font-bold text-xl mb-4">Room Lobby:</h1>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          readOnly={connecting}
          required
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-3 my-4">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-gray-700"
        >
          Room Name
        </label>
        <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          readOnly={connecting}
          required
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={connecting}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {connecting ? "Connecting" : "Join"}
        </button>
      </div>
    </form>
  );
};

export default Lobby;
