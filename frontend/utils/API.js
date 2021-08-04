import axios from "axios";

export const getTwilioToken = async (username, roomName) => {
  const response = await axios.post("http://localhost:5000/api/v1/videos/token", {
    identity: username,
    room: roomName,
  });
  console.log(response);
  return response.data.data.token;
}
