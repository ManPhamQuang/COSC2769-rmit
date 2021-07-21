import React from "react";
import Card from "./Card";
import axios from "axios";
import useSWR from "swr";
import SkeletonCard from "./SkeletonCard";
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function CardSlider() {
    const { data, error } = useSWR(
        "http://localhost:5000/api/v1/rooms",
        fetcher
    );
    if (!data)
        // Renders a row of skeleton card to indicate loading
        return (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        );
    if (error) return <h1>error!</h1>;

    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {data.data.rooms.map((room) => (
                <Card key={room._id} props={room} />
            ))}
        </div>
    );
}
