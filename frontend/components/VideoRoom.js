import React, { useEffect, useState } from "react";
import LocalParticipant from "./LocalParticipant";
import RemoteParticipant from "./RemoteParticipant";
import VideoRoomNavBar from "./VideoRoomNavBar";

const Room = ({ roomName, room, handleLogout }) => {
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

  // const remoteParticipants = participants.map((participant) => (
  //   <Participant key={participant.sid} participant={participant} />
  // ));

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
      {/* <div className="remote-participants">{remoteParticipants}</div> */}
      <div className="flex flex-row absolute bottom-20 left-2">
        {participants.map((participant) => (
          <RemoteParticipant key={participant.sid} participant={participant} />
        ))}
      </div>
      <VideoRoomNavBar roomName={roomName} handleLogout={handleLogout} />
    </div>
  );
};

export default Room;
