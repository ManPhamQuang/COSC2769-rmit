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
    let [categories] = useState({
        Recent: [
            {
                id: 1,
                title: "Does drinking coffee make you smarter?",
                date: "5h ago",
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: "2h ago",
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: "Is tech making coffee better or worse?",
                date: "Jan 7",
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: "The most innovative things happening in coffee",
                date: "Mar 19",
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: "Ask Me Anything: 10 answers to your questions about coffee",
                date: "2d ago",
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: "4d ago",
                commentCount: 1,
                shareCount: 2,
            },
        ],
    });
    const { state, dispatch } = useContext(AuthContext);
    const { rooms, setRooms } = useState([]);
    useEffect(() => {
        // Navigate user to Login page if can not find token
        if (!state.token) {
            router.push("/login");
        }
        axios
            .get("http://localhost:5000/api/v1/rooms")
            .then((res) => console.log(res.data.data.rooms))
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
                    <div className="container mx-auto pt-10  text-white">
                        <h2 className="text-3xl font-semibold">My Rooms</h2>
                        <Tab.List className="flex w-max space-x-1 ">
                            {Object.keys(categories).map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            "w-[100px] py-2.5 text-sm leading-5 font-medium ",
                                            "",
                                            selected
                                                ? "border-b-2 border-white"
                                                : "text-gray-300 hover:bg-white/[0.12] hover:text-white"
                                        )
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                    </div>
                </header>
                <div className="container mx-auto bg-blue-200">
                    <h1>My rooms</h1>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    "bg-white",
                                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                                )}
                            >
                                <ul>
                                    {posts.map((post) => (
                                        <li
                                            key={post.id}
                                            className="relative p-3 hover:bg-coolGray-100"
                                        >
                                            <h3 className="text-sm font-medium leading-5">
                                                {post.title}
                                            </h3>

                                            <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                                                <li>{post.date}</li>
                                                <li>&middot;</li>
                                                <li>
                                                    {post.commentCount} comments
                                                </li>
                                                <li>&middot;</li>
                                                <li>
                                                    {post.shareCount} shares
                                                </li>
                                            </ul>

                                            <a
                                                href="#"
                                                className={classNames(
                                                    "absolute inset-0",
                                                    "focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"
                                                )}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </>
    );
}
