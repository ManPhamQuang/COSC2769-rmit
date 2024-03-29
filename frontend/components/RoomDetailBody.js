import React from "react";
import {
    CheckIcon,
    ThumbUpIcon,
    DeviceMobileIcon,
} from "@heroicons/react/outline";
import TeacherSelfIntroduction from "./TeacherSelfIntroduction";
import axios from "./axios/index";
import ReadMore from "./ReadMore";
import { useContext } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const courseInfor = {
    id: 1,
    title: "Microsoft Excel - Excel from Beginner to Advanced",
    teacher: "Kyle Pew, Office Newb",
    rating: 4.6,
    views: "237,548",
    price: "$94,99",
    tag: "Bestseller",
    description:
        "Who this course is for: If you are an absolute beginner to coding, then take this course.If you are a seasoned programmer, then take this course to to get up to speed quickly with Swift 5.1 and native app development. Start with the Xcode walkthrough lesson and we'll get you familiar with iOS development in no time!If you are switching from Objective-C to Swift then this is a fast-track way of doing it. You can get started straight away with the Intermediate Swift Language module.If you are a pro iOS developer and want to quickly get up to date with Apple's latest technology, then start with the modules on SwiftUI, ARKit and CoreML.",
    features: [
        "Concepts of Object Oriented Programming (OOP): The type system, variables, functions and methods, inheritance, structures, classes and protocols.",
        "Control Structures: Using If/­Else clauses, Switch statements and logic to control the flow of execution.",
        "Data Structures: How to work with collections, such as arrays and dictionaries",
        "Software Design: How to organise and format code",
    ],
};

export default function RoomDetailBody({ room, hasPaid }) {
    const router = useRouter();
    const _id = router.query._id;
    const { state } = useContext(AuthContext);
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
            console.log(error);
            toast.error(
                error.response?.data?.message ??
                    "Server Error! Please try again later"
            );
        }
    };

    return (
        <div className="container mx-auto w-full grid grid-cols-1 xl:grid-cols-3 xl:px-56">
            <div className="col-span-1 px-4 py-2 xl:px-18 py-6 xl:col-span-2 space-y-8 ">
                <div className="border border-gray-300 space-y-2 px-2 py-2 xl:space-y-4 xl:px-12 xl:py-4 ">
                    <p className="font-bold text-1xl lg:text-3xl">
                        What you'll learn
                    </p>
                    {courseInfor.features.map((feature, index) => (
                        <div className="" key={index}>
                            <CheckIcon className="h-4 w-4 inline mb-1" />
                            <p className="inline text-sm lg:text-base">
                                &nbsp;{feature}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="space-y-2">
                    <p className="font-bold text-1xl lg:text-3xl">
                        Description
                    </p>
                </div>
                <div>
                    <TeacherSelfIntroduction
                        key={room.createdBy}
                        props={room.createdBy}
                    />
                </div>
            </div>
            <div className="hidden xl:block px-6 py-6">
                <div className="border border-gray-300">
                    <img
                        src={room.thumbnail}
                        alt="Room thumbnail"
                        className="w-full h-auto border-b-2 border-gray-300"
                    />
                    <div className="px-2 py-4 space-y-3 ">
                        <p className="text-4xl subpixel-antialiased font-bold">
                            ${room.price}
                        </p>
                        {hasPaid ? (
                            <button
                                className="text-1xl text-white font-bold bg-purple-600 py-3 w-full hover:bg-purple-800 "
                                onClick={handleJoinRoom}
                            >
                                Join Room
                            </button>
                        ) : (
                            <button
                                className="text-1xl font-bold py-3 w-full hover:bg-gray-300 border border-black"
                                onClick={handleCheckout}
                            >
                                Buy now
                            </button>
                        )}
                        <p className="text-sm text-center">
                            30-Day Money-Back Guarantee
                        </p>
                        <div className="space-y-4">
                            <p className="text-base font-bold ">
                                This workshop includes:
                            </p>
                            <div>
                                <ThumbUpIcon className="h-5 w-5 inline mb-1" />
                                <p className="inline text-base">
                                    &nbsp;&nbsp;Real-time interaction
                                </p>
                            </div>
                            <div>
                                <DeviceMobileIcon className="h-5 w-5 inline mb-1" />
                                <p className="inline text-base">
                                    &nbsp;&nbsp;Access on mobile and TV
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
