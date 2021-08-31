import React from "react";
import {
    CheckIcon,
    ThumbUpIcon,
    DeviceMobileIcon,
} from "@heroicons/react/outline";
import TeacherSelfIntroduction from "./TeacherSelfIntroduction";
import axios from "./axios";
import ReadMore from "./ReadMore";
import { useContext } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";


export default function RoomDetailBody({ props }) {
    const router = useRouter();
    const _id = router.query._id;
    const { state, dispatch } = useContext(AuthContext);
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
            <div className="w-full grid grid-cols-1  md:px-20 pt-20 ">
                <div className="col-span-1 px-4 py-2 xl:px-40 py-6 lg:col-span-2 space-y-8 ">
                    <div className="space-y-2 px-2 py-2 lg:space-y-4 lg:px-12 lg:py-4 ">
                        <div className="">
                            <div>
                                <p className="font-bold text-sm text-gray-600 lg:text-2xl">
                                    Instructor
                                </p>
                                <p className="py-5 font-bold uppercase tracking-wide sm:text-2xl text-3xl text-indigo-500 lg:text-4xl">
                                    ${props.name}
                                </p>
                                <p className="pb-5 font-bold tracking-wide text-sm text-gray-600 lg:text-base">
                                Data Scientist
                                </p>
                            </div>
                            <div>
                                <div className="sm:grid sm:grid-cols-4 sm:py-2 sm:pb-10 flex flex-col">
                                    <div className=" ">
                                        <img
                                            alt="Expert Avatar"
                                            src="https://img-c.udemycdn.com/user/200_H/15722848_5948_3.jpg"
                                            className="inline object-cover rounded-full h-25 w-25 sm:h-60 sm:w-60 ml-15 sm:place-self-center "
                                        />
                                    </div>
                                    <div className="w-50 col-span-3 pl-10 flex items-center">
                                        <div className="space-y-4">
                                            <div className="inline">
                                                <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1 lg:h-5 lg:w-5" />
                                                <p className="text-gray-600 inline text-sm lg:text-base">
                                                    {props.ratingsAverage}
                                                </p>
                                                <p className="text-gray-600 inline text-sm sm:text-base">
                                                    &nbsp;Instructor Rating
                                                </p>
                                            </div>
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 inline mb-1 ml-1 lg:h-5 lg:w-5"
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
                                                <p className="text-gray-600 inline text-sm lg:text-base">
                                                    &nbsp;{props.roomAmount}&nbsp;rooms
                                                </p>
                                            </div>
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 inline mb-1 ml-1 lg:h-5 lg:w-5"
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
                                                <p className="text-gray-600 inline text-sm lg:text-base">
                                                    &nbsp;{props.reviewerAmount}&nbsp;reviews
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <p className="font-bold text-sm mb-2  sm:text-2xl">About me</p>
                                <p className="mt-1 text-sm text-justify lg:text-base">
                                    Hey! I'm Zachary Reece, a startup founder
                                    from Wichita, Kansas. I started building
                                    websites when I was just 9 years old,
                                    teaching myself about HTML and the Internet
                                    from library books. Ever since then I've
                                    spent all of my time studying UI/UX/graphic
                                    design, mathematics, philosophy, and of
                                    course computer science. Right now I'm
                                    continuing to study JavaScript at a low
                                    level to optimize the web and mobile
                                    applications I create, as well as beginning
                                    work on my first machine learning-based
                                    application. I started a custom software
                                    company, Arc Development, when I was 21
                                    years old to bring fast, affordable, and
                                    aesthetic software to the Midwest. I hope to
                                    teach the skills I've learned throughout
                                    that process to my students here on Udemy!
                                </p>
                            </div>
                            <div className="mt-10">
                                <p className="font-bold text-smg mb-2  sm:text-2xl">My rooms:</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}