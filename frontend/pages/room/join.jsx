import Head from "next/head";
import VideoChat from "../../components/VideoChat";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url, token) =>
    axios
        .get(url, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.data.data);

export default function Join() {
  const router = useRouter();
  const roomID = router.query.roomID;
  const url = `http://localhost:5000/api/v1/rooms/join?id=${roomID}`;

  // Fix bug localStorage undefined in NextJS
  const getAccessToken = () => {
    let accessToken = null;
    if (typeof window !== "undefined") {
      accessToken = localStorage.getItem("accessToken") ?? null;
    }
    return accessToken;
  };

  let accessToken = getAccessToken();

  // Fix bug SWR with query undefined
  const { data, roomErr } = useSWR(
    roomID ? [url, accessToken] : null,
    roomID ? fetcher : null
  );

  console.log(data);

  return (
    <div>
      <div className="">
        {/* <VideoChat></VideoChat> */}
        <h1>Join Room Page</h1>
      </div>
    </div>
  );
}
