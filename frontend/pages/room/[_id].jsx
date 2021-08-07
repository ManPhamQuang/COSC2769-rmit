import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

export default function RoomDetail() {
  const router = useRouter();
  const _id = router.query._id;

  const url = `http://localhost:5000/api/v1/rooms/${_id}`;
  const { data, error } = useSWR(_id ? url : null, _id ? fetcher : null);
  console.log(data);

  return (
    <div>
      <h1>Room Detail page</h1>
      <h2>{_id}</h2>
      {data && (
        <div>
          <h2>{data.room.title}</h2>
          <h2>{data.room.description}</h2>
        </div>
      )}
    </div>
  );
}
