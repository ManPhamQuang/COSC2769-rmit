import React from "react";
import useSWR from "swr";
import { Tab } from "@headlessui/react";
import axios from "./axios";
import SkeletonCard from "./SkeletonCard";
import Card from "./Card";
import { toast } from 'react-toastify';

const fetcher = (url, token) =>
    axios
        .get(url, {
            headers: { Authorization: `Bearer ${token}` },
        }) // TODO: need to change the api to fetch users's room
        .then((res) => {
            let transactions = res.data.data.transactions;
            let results = transactions.map((el) => el.room);
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
        })
        .catch((error) => {
            toast.error(error.response?.data?.message ?? "Server Error! Please try again later");
        });

export default function RoomsList({ token }) {
    const { data, error } = useSWR(["/transactions", token], fetcher);
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
                                <Card props={room} key={room._id} />
                            ))}
                        </div>
                    </Tab.Panel>
                );
            })}
        </Tab.Panels>
    );
}
