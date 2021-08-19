import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import NavBar from "../components/navbar/NavBar";
import Head from "next/head";
import { useContext } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { Tab } from "@headlessui/react";
import router from "next/router";
import axios from "axios";
import useSWR from "swr";
import RoomsList from "../components/RoomsList";
import RoomCardsSlider from "../components/RoomCardsSlider";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const TabTitles = ["Active", "Pending", "Over"];

const fetcher = (url) => {
    axios
        .get(url) // TODO: need to change the api to fetch users's room
        .then((res) => {
            let results = res.data.data.rooms;
            console.log(results);
            let activeRooms = results.filter(
                (room) => room.status === "active"
            );
            let pendingRooms = results.filter(
                (room) => room.status === "pending"
            );
            let overRooms = results.filter((room) => room.status === "over");
            console.log({
                Active: activeRooms,
                Pending: pendingRooms,
                Over: overRooms,
            });
            return {
                Active: activeRooms,
                Pending: pendingRooms,
                Over: overRooms,
            };
        });
};

export default function MyRooms() {
    const { state, dispatch } = useContext(AuthContext);
    useEffect(() => {
        // Navigate user to Login page if can not find token
        if (!state.token) {
            router.push("/login");
        }
    }, []);

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
                            {TabTitles.map((status) => (
                                <Tab
                                    key={status}
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
                                    {status}
                                </Tab>
                            ))}
                        </Tab.List>
                    </div>
                </header>
                <div className="container mx-auto px-10 laptop:px-24 3xl:px-0">
                    <RoomsList token={state.token} />
                </div>
            </Tab.Group>
        </>
    );
}
