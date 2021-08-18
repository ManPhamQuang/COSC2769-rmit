import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/navbar/NavBar";
import Head from "next/head";
import { useContext } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { Tab } from "@headlessui/react";
import router from "next/router";
import axios from "axios";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function MyRooms() {
    let [rooms, setRooms] = useState({
        Active: [],
        Pending: [],
        Over: [],
    }); // TODO: implement useSWR for loading
    const { state, dispatch } = useContext(AuthContext);
    useEffect(() => {
        // Navigate user to Login page if can not find token
        if (!state.token) {
            router.push("/login");
        }
        axios
            .get("http://localhost:5000/api/v1/rooms") // TODO: need to change the api to fetch users's room
            .then((res) => {
                let results = res.data.data.rooms;
                let activeRooms = results.filter(
                    (room) => room.status === "active"
                );
                let pendingRooms = results.filter(
                    (room) => room.status === "pending"
                );
                let overRooms = results.filter(
                    (room) => room.status === "over"
                );
                setRooms({
                    Active: activeRooms,
                    Pending: pendingRooms,
                    Over: overRooms,
                });
            })
            .catch((err) => console.log(err));
    }, []);

    const setup = () => {
        return {
            activeTab: 0,
            tabs: ["Pending", "Active", "Over"],
        };
    };
    // return (
    //     <div className="w-full max-w-md px-2 py-16 sm:px-0">
    //         <Tab.Group>
    //             <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 ">
    //                 {Object.keys(categories).map((category) => (
    //                     <Tab
    //                         key={category}
    //                         className={({ selected }) =>
    //                             classNames(
    //                                 "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 ",
    //                                 "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
    //                                 selected
    //                                     ? "bg-white shadow"
    //                                     : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
    //                             )
    //                         }
    //                     >
    //                         {category}
    //                     </Tab>
    //                 ))}
    //             </Tab.List>
    //             <Tab.Panels className="mt-2">
    //                 {Object.values(categories).map((posts, idx) => (
    //                     <Tab.Panel
    //                         key={idx}
    //                         className={classNames(
    //                             "bg-white rounded-xl p-3",
    //                             "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
    //                         )}
    //                     >
    //                         <ul>
    //                             {posts.map((post) => (
    //                                 <li
    //                                     key={post.id}
    //                                     className="relative p-3 rounded-md hover:bg-coolGray-100"
    //                                 >
    //                                     <h3 className="text-sm font-medium leading-5">
    //                                         {post.title}
    //                                     </h3>

    //                                     <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
    //                                         <li>{post.date}</li>
    //                                         <li>&middot;</li>
    //                                         <li>
    //                                             {post.commentCount} comments
    //                                         </li>
    //                                         <li>&middot;</li>
    //                                         <li>{post.shareCount} shares</li>
    //                                     </ul>

    //                                     <a
    //                                         href="#"
    //                                         className={classNames(
    //                                             "absolute inset-0 rounded-md",
    //                                             "focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"
    //                                         )}
    //                                     />
    //                                 </li>
    //                             ))}
    //                         </ul>
    //                     </Tab.Panel>
    //                 ))}
    //             </Tab.Panels>
    //         </Tab.Group>
    //     </div>
    // );
    return (
        <>
            <Head>
                <title>My Rooms</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <NavBar />
            <Tab.Group>
                <header className="bg-gray-500 min-w-full">
                    <div className="container mx-auto px-10 laptop:px-24 3xl:px-0 pt-10  text-white">
                        <h2 className="text-3xl font-semibold">My Rooms</h2>
                        <Tab.List className="flex w-max space-x-1 ">
                            {Object.keys(rooms).map((room) => (
                                <Tab
                                    key={room}
                                    className={({ selected }) =>
                                        classNames(
                                            "w-[100px] py-2.5 text-sm leading-5 font-medium ",
                                            "",
                                            selected
                                                ? "border-b-4 border-gray-300 rounded-none"
                                                : "text-gray-300 hover:bg-white/[0.12] hover:text-white"
                                        )
                                    }
                                >
                                    {room}
                                </Tab>
                            ))}
                        </Tab.List>
                    </div>
                </header>
                <div className="container mx-auto px-10 laptop:px-24 3xl:px-0">
                    <Tab.Panels className="mt-2">
                        {Object.values(rooms).map((roomStatus, idx) => (
                            <Tab.Panel key={idx}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3  xl:grid-cols-4 3xl:grid-cols-5 gap-4">
                                    {roomStatus.map((room) => (
                                        <Card props={room} />
                                    ))}
                                </div>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </>
    );
}
