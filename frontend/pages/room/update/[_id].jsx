import React from "react";
import { useState, useReducer, useEffect, useContext } from "react";
import NavBar from "../../../components/navbar/NavBar";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import UpdateForm from "../../../components/UpdateForm";

const roomFetcher = (url) => axios.get(url).then((res) => res.data.data);

const roomReducer = (state, action) => {
    switch (action.type) {
        case "ROOM_INIT":
            return {
                ...state,
                isLoading: false,
                error: null,
            };
        case "ROOM_LOADING":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "ROOM_CREATE_SUCCESS":
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: null,
            };
        case "ROOM_CREATE_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            throw new Error();
    }
};

export default function update() {
    const router = useRouter();
    const _id = router.query._id;
    const url = `http://localhost:5000/api/v1/rooms/${_id}`;

    //Fetch room detail from server. (NOTE: Check _id to fix bug SWR with query undefined)
    const { data, roomErr } = useSWR(
        _id ? url : null,
        _id ? roomFetcher : null
    );

    // const getAccessToken = () => {
    //     let accessToken = null;
    //     if (typeof window !== "undefined") {
    //         accessToken = localStorage.getItem("accessToken") ?? null;
    //     }
    //     return accessToken;
    // };

    return (
        <div>
            <NavBar />
            <div className="container mx-auto p-4 h-full">
                {/* {room.isLoading && (
                    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                        <h2 className="text-center text-white text-xl font-semibold">
                            Loading...
                        </h2>
                        <p className="w-1/3 text-center text-white">
                            This may take a few seconds, please don't close this
                            page.
                        </p>
                    </div>
                )} */}
                {data && <UpdateForm roomDetail={data.room} />}
            </div>
        </div>
    );
}
