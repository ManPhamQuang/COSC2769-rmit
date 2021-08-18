import React from "react";
import useSWR from "swr";
import { Tab } from "@headlessui/react";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";
import Card from "./Card";

const fetcher = (url) =>
    axios
        .get(url) // TODO: need to change the api to fetch users's room
        .then((res) => {
            let results = res.data.data.rooms;
            let activeRooms = results.filter(
                (room) => room.status === "active"
            );
            let pendingRooms = results.filter(
                (room) => room.status === "pending"
            );
            let overRooms = results.filter((room) => room.status === "over");
            let result = {
                Active: activeRooms,
                Pending: pendingRooms,
                Over: overRooms,
            };
            return result;
        });

export default function RoomsList() {
    const { data, error } = useSWR(
        "http://localhost:5000/api/v1/rooms",
        fetcher
    );
    if (!data)
        // Renders a row of skeleton card to indicate loading
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3  xl:grid-cols-4 3xl:grid-cols-5 gap-4">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        );
    if (error) return <h1>error!</h1>;

    return (
        <Tab.Panels className="mt-2">
            {Object.values(data).map((roomStatus, idx) => {
                return (
                    <Tab.Panel key={idx}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3  xl:grid-cols-4 3xl:grid-cols-5 gap-4">
                            {roomStatus.map((room) => (
                                <Card props={room} />
                            ))}
                        </div>
                    </Tab.Panel>
                );
            })}
        </Tab.Panels>
    );
}
