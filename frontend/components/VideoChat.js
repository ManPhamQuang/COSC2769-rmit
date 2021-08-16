import React, { useState, useCallback, useEffect } from "react";
import Video from "twilio-video";
import Lobby from "./Lobby";
import { getTwilioToken } from "../utils/API";
import VideoRoom from "./VideoRoom";

const VideoChat = ({ props }) => {
    const { title } = props;
    const [username, setUsername] = useState("");
    const [roomName, setRoomName] = useState(title);
    const [room, setRoom] = useState(null);
    const [connecting, setConnecting] = useState(false);
    const [token, setToken] = useState(null);
    const handleUsernameChange = useCallback((event) => {
        setUsername(event.target.value);
    }, []);

    const handleRoomNameChange = useCallback((event) => {
        setRoomName(event.target.value);
    }, []);

    const handleSubmit = useCallback(
        async (event) => {
            event.preventDefault();
            setConnecting(true);

            // Get Twilio Token
            const token = await getTwilioToken(username, roomName);
            setToken(token);

            // Check audio/video hardware available
            var roomOption = {
                name: roomName,
            };
            try {
                const track = await Video.createLocalVideoTrack();
            } catch {
                roomOption.video = false;
            }
            try {
                const track = await Video.createLocalAudioTrack();
            } catch {
                roomOption.audio = false;
            }

            // Connect to room
            Video.connect(token, roomOption)
                .then((room) => {
                    setConnecting(false);
                    setRoom(room);
                })
                .catch((err) => {
                    console.error(err);
                    setConnecting(false);
                });
        },
        [roomName, username]
    );

    const handleLogout = useCallback(() => {
        setRoom((prevRoom) => {
            if (prevRoom) {
                prevRoom.localParticipant.tracks.forEach((trackPub) => {
                    trackPub.track.stop();
                });
                prevRoom.disconnect();
            }
            return null;
        });
    }, []);

    useEffect(() => {
        console.log(title);
        if (room) {
            const tidyUp = (event) => {
                if (event.persisted) {
                    return;
                }
                if (room) {
                    handleLogout();
                }
            };
            window.addEventListener("pagehide", tidyUp);
            window.addEventListener("beforeunload", tidyUp);
            return () => {
                window.removeEventListener("pagehide", tidyUp);
                window.removeEventListener("beforeunload", tidyUp);
            };
        }
    }, [room, handleLogout]);

    let render;
    if (room) {
        render = (
            <VideoRoom
                username={username}
                roomName={roomName}
                room={room}
                handleLogout={handleLogout}
                token={token}
            />
        );
    } else {
        render = (
            <Lobby
                username={username}
                roomName={roomName}
                handleUsernameChange={handleUsernameChange}
                handleRoomNameChange={handleRoomNameChange}
                handleSubmit={handleSubmit}
                connecting={connecting}
            />
        );
    }
    return render;
};

export default VideoChat;
