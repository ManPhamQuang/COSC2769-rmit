import Head from "next/head";
import VideoChat from "../../components/VideoChat";
import { useRouter } from "next/router";
import axios from "../../components/axios";
import useSWR from "swr";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { toast } from 'react-toastify';

const fetcher = (url, token) =>
    axios
        .get(url, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.data.data)
        .catch((error) => {
            toast.error(error.response.data.message);
        })

export default function Join() {
    const router = useRouter();
    const roomID = router.query.roomID;
    const url = `/rooms/join?id=${roomID}`;

    const { state, dispatch } = useContext(AuthContext);

    useEffect(() => {
        // Navigate user to Login page if can not find token
        if (!state.token) {
            router.push("/login");
        }
    }, []);

    // Call /join Endpoint (NOTE: Fix bug SWR with query undefined)
    const { data, error } = useSWR(
        roomID ? [url, state.token] : null,
        roomID ? fetcher : null
    );

    return (
        <>
            {data && (
                <div>
                    <VideoChat props={data.room} />
                </div>
            )}
        </>
    );
}
