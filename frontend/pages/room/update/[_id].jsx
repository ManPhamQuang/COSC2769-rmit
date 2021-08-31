import React from "react";
import NavBar from "../../../components/navbar/NavBar";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import UpdateForm from "../../../components/UpdateForm";

const roomFetcher = (url) => axios.get(url).then((res) => res.data.data);

export default function update() {
    const router = useRouter();
    const _id = router.query._id;
    const url = `http://localhost:5000/api/v1/rooms/${_id}`;

    //Fetch room detail from server. (NOTE: Check _id to fix bug SWR with query undefined)
    const { data, roomErr } = useSWR(
        _id ? url : null,
        _id ? roomFetcher : null
    );

    return (
        <div>
            <NavBar />
            <div className="container mx-auto p-4 h-full">
                {data && <UpdateForm roomDetail={data.room} />}
            </div>
        </div>
    );
}
