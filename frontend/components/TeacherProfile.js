import React from "react";
import axios from "./axios";
import ReadMore from "./ReadMore";
import { useContext } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/solid";
import Carousel from "react-grid-carousel";
import Card from "./Card";
import SearchCard from "./searchResult/SearchCard";

export default function TeacherProfile({ props }) {
    const router = useRouter();
    const _id = router.query._id;
    const { state, dispatch } = useContext(AuthContext);

    const handleCheckout = async (e) => {
        if (!state.token) {
            router.push("/login");
        }
        try {
            const request = await axios.get(`/checkouts/${_id}`, {
                headers: {
                    Authorization: "Bearer " + state.token,
                },
            });
            const { url } = request.data.data;
            router.push(url);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="w-full bg-black">
                <div className="container mx-auto py-4 px-4 space-y-1">
                    <div className="flex justify-center">
                        <img
                            alt="Expert Avatar"
                            src={props.avatar}
                            className="inline rounded-full h-48 w-48 border-white border-2"
                        />
                    </div>
                    <div className="mt-2 space-y-2">
                        <p className="font-bold text-center text-sm text-white lg:text-xl">
                            INSTRUCTOR
                        </p>
                        <p className="font-bold text-center uppercase text-base text-white lg:text-3xl">
                            {props.name}
                        </p>
                    </div>
                    <div className="w-full mx-auto flex justify-center">
                        <div className="items-center space-x-4 mt-1 block lg:flex ">
                            <div>
                                <p className="text-yellow-500 text-base font-semibold inline lg:text-lg">
                                    5
                                </p>
                                <StarIcon className="h-5 w-5 text-yellow-500 inline mb-1" />
                                <p className="text-white inline text-base lg:text-lg">
                                    &nbsp;Instructor Rating
                                </p>
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-white h-5 w-5 inline mb-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    />
                                </svg>
                                <p className="text-white inline text-base lg:text-lg">
                                    &nbsp;{props.rooms.length}&nbsp;Rooms&nbsp;
                                </p>
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-white h-5 w-5 inline mb-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                    />
                                </svg>
                                <p className="text-white inline text-base lg:text-lg">
                                    &nbsp;91&nbsp;Reviews&nbsp;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-8 mt-4 space-y-8 lg:px-32">
                <div className="space-y-2">
                    <p className="font-bold text-xl lg:text-2xl">About me</p>
                    <p className="text-lg lg:text-xl">{props.description}</p>
                </div>
                <div className="space-y-2">
                    <div>
                        <p className="font-bold text-xl lg:text-2xl">
                            My rooms
                        </p>
                    </div>
                    <div className="grid gap-x-8 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {props.rooms.map((room) => (
                            <SearchCard key={room._id} room={room} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
