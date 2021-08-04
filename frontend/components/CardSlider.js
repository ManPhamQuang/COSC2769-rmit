import React from "react";
import Card from "./Card";
import axios from "axios";
import useSWR from "swr";
import SkeletonCard from "./SkeletonCard";
import Carousel from "react-grid-carousel";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function CardSlider() {
    const { data, error } = useSWR(
        "http://localhost:5000/api/v1/rooms?limit=10",
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
            </div>
        );
    if (error) return <h1>error!</h1>;
    return (
        <Carousel
            cols={5}
            responsiveLayout={[
                {
                    breakpoint: 1600,
                    cols: 5,
                    rows: 1,
                    gap: 10,
                    loop: true,
                },
                {
                    breakpoint: 1280,
                    cols: 4,
                    rows: 1,
                    gap: 10,
                    loop: true,
                },
                {
                    breakpoint: 1100,
                    cols: 3,
                    rows: 1,
                    gap: 10,
                    loop: true,
                },
                {
                    breakpoint: 768,
                    cols: 2,
                    rows: 1,
                    gap: 10,
                    loop: true,
                },
            ]}
        >
            {data.data.rooms.map((room) => (
                <Carousel.Item key={room._id}>
                    <Card key={room._id} props={room} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
