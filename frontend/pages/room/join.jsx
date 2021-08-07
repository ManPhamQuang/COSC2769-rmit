import Head from "next/head";
import VideoChat from "../../components/VideoChat";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import { useState, useEffect } from "react";

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

  // Get accessToken from local storage. (NOTE: Fix bug localStorage undefined in NextJS)
  const getAccessToken = () => {
    let accessToken = null;
    if (typeof window !== "undefined") {
      accessToken = localStorage.getItem("accessToken") ?? null;
    }
    return accessToken;
  };

  let accessToken = getAccessToken();

  // Call /join Endpoint (NOTE: Fix bug SWR with query undefined)
  const { data, roomErr } = useSWR(
    roomID ? [url, accessToken] : null,
    roomID ? fetcher : null
  );

  useEffect(() => {
    // Navigate user to Login page if can not find token
    if (!accessToken) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="">
      {data && (
        <div>
          <VideoChat props={data.room} />
        </div>
      )}
    </div>
  );
}
