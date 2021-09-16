import axios from "../components/axios";

export const getTwilioToken = async (username, roomName) => {
    const response = await axios.post("/videos/token", {
        identity: username,
        room: roomName,
    });
    return response.data.data.token;
};
