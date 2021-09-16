import React from "react";
import {
    StarIcon,
    ExclamationCircleIcon,
    GlobeAltIcon,
    DocumentTextIcon,
    HeartIcon,
    ShareIcon,
    GiftIcon,
    CheckIcon,
} from "@heroicons/react/solid";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "./axios/index";
import DateTimeFormatter from "../utils/DateTimeFormat";

export default function RoomDetailHeader({ room, hasPaid }) {
    const router = useRouter();
    const _id = router.query._id;
    const { state } = useContext(AuthContext);
    const [color, setColor] = useState("");
    const [text, setText] = useState("");
    const handleJoinRoom = (e) => {
        // Navigate to Log In page if can not find access Token
        if (!state.token) {
            router.push("/login");
        }
        router.push({
            pathname: "/room/join",
            query: { roomID: _id },
        });
        e.preventDefault();
    };

    // function roomColor(room) {
    //     if (room.status == "pending") {
    //         setColor("bg-yellow-500");
    //         setText("This room will start at");
    //     } else if (room.status == "active") {
    //         setColor("bg-green-500");
    //         setText("This room is currently active");
    //     } else {
    //         setColor("bg-red-500");
    //         setText("This room has finished.");
    //     }
    // }
    useEffect(() => {
        if (room.status == "pending") {
            setColor("bg-yellow-500");
            setText("This room will start at");
        } else if (room.status == "active") {
            setColor("bg-green-500");
            setText("This room is currently active");
        } else {
            setColor("bg-red-500");
            setText("This room has finished.");
        }
    }, []);

    const handleCheckout = async (e) => {
        if (!state.token) {
            router.push("/login");
            return;
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
            toast.error(
                error.response?.data?.message ??
                    "Server Error! Please try again later"
            );
        }
    };
    return (
        <div>
            <div className="bg-black z-0 w-full">
                <div className="container leading-loose mx-auto w-full h-auto px-4 py-5 text-center">
                    <p className="subpixel-antialiased text-white font-bold pb-2 text-1xl lg:text-4xl ">
                        {room.title}
                    </p>
                    <p className="subpixel-antialiased text-white text-base lg:text-2xl ">
                        {room.description}
                    </p>
                    <p className="text-yellow-500 font-semibold inline">4.7</p>
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <p className="inline text-white text-xs lg:text-base ">
                        &nbsp;(91 ratings) &nbsp;30,000 students
                    </p>
                    <p className="text-white text-xs lg:text-base">
                        Created by {room.createdBy.name}
                    </p>
                    <div className="w-full mx-auto flex justify-center">
                        <div className="items-center mt-1 block lg:flex ">
                            <div>
                                <ExclamationCircleIcon className="text-white h-5 w-5 inline" />
                                <p className="text-white inline text-sm lg:text-base">
                                    &nbsp;Last updated 6/2021&nbsp;
                                </p>
                            </div>
                            <div>
                                <GlobeAltIcon className="text-white h-5 w-5 inline" />
                                <p className="inline text-white text-sm lg:text-base">
                                    &nbsp;English&nbsp;
                                </p>
                            </div>
                            <div>
                                <DocumentTextIcon className="text-white h-5 w-5 inline" />
                                <p className="inline text-white text-sm lg:text-base">
                                    &nbsp;English [Auto]&nbsp;
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mx-auto flex justify-center">
                        <div className="mt-2 w-max">
                            <div className={`${color} px-4 py-2`}>
                                <p className="font-bold text-base lg:text-xl">
                                    Status: {room.status}. {text}&nbsp;
                                    {DateTimeFormatter(room.startedAt)}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-white text-2xl font-bold mt-2 xl:hidden">
                        <p>${room.price}</p>
                    </div>
                    <div className="hidden xl:flex items-center mt-4 space-x-3 justify-center">
                        <button className="inline text-base text-white font-semibold border p-2 flex items-center hover:bg-gray-800">
                            Wishlist&nbsp;
                            <HeartIcon className="text-white h-5 w-5 inline" />
                        </button>
                        <button className="inline text-base text-white font-semibold border p-2 flex items-center hover:bg-gray-800">
                            Share&nbsp;
                            <ShareIcon className="text-white h-5 w-5 inline" />
                        </button>
                        <button className="inline text-base text-white font-semibold border p-2 flex items-center hover:bg-gray-800">
                            Gift this workshop&nbsp;
                            <GiftIcon className="text-white h-5 w-5 inline" />
                        </button>
                    </div>
                    <div className="block mt-4 space-y-3 pb-4 xl:hidden">
                        <p className="text-xs text-center text-white">
                            30-Day Money-Back Guarantee
                        </p>
                        <button className="w-full text-base text-white font-semibold border p-2 flex items-center justify-center hover:bg-gray-800">
                            Add to wishlist&nbsp;
                            <HeartIcon className="text-white h-4 w-4 inline" />
                        </button>
                        <button className="w-full text-base text-white font-semibold border p-2 flex items-center justify-center hover:bg-gray-800">
                            Share&nbsp;
                            <ShareIcon className="text-white h-4 w-4 inline" />
                        </button>
                        <button className="w-full text-base text-white font-semibold border p-2 flex items-center justify-center hover:bg-gray-800">
                            Gift this workshop&nbsp;
                            <GiftIcon className="text-white h-4 w-4 inline" />
                        </button>
                        <button className="w-full text-base text-white font-semibold border p-2 flex items-center justify-center hover:bg-gray-800">
                            Apply Coupon&nbsp;
                        </button>
                    </div>
                </div>
            </div>
            <div className="fixed inline-flex justify-evenly bottom-0 w-full bg-white z-10 p-2 border-t-2 space-x-4 xl:hidden">
                <div className="inline-flex items-center ">
                    <p className="inline text-2xl font-bold w-3/12">
                        ${room.price}
                    </p>
                </div>
                {hasPaid ? (
                    <button
                        className="inline w-9/12 bg-black text-white p-2"
                        onClick={handleJoinRoom}
                    >
                        Join Room
                    </button>
                ) : (
                    <button
                        className="inline w-9/12 bg-black text-white p-2"
                        onClick={handleCheckout}
                    >
                        Buy now
                    </button>
                )}
            </div>
        </div>
    );
}
