import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import LocalParticipant from "./LocalParticipant";
import RemoteParticipant from "./RemoteParticipant";
import VideoRoomNavBar from "./VideoRoomNavBar";

const Room = ({ username, roomName, room, handleLogout, token}) => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = (participant) => {
      console.log(participant);
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);
    room.participants.forEach(participantConnected);
    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  return (
    <div className="room relative">
      <div className="local-participant h-full">
        {room ? (
          <LocalParticipant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-row absolute bottom-20 left-2">
        {participants.map((participant) => (
          <RemoteParticipant key={participant.sid} participant={participant} />
        ))}
      </div>
      <Chat username={username} roomName={roomName} token={token}></Chat>
      <VideoRoomNavBar roomName={roomName} handleLogout={handleLogout} />
    </div>
  );
};

export default Room;
