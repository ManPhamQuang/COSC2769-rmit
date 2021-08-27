import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "./axios";
import Carousel from "react-grid-carousel";
import { toast } from 'react-toastify';

export default function RandomRoomCardsSlider({ category }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("/rooms", {
                params: {
                    limit: 10,
                    status: "pending",
                    category: category._id,
                },
            })
            .then((res) => {
                setData(res.data.data.rooms);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    }, []);

    if (data.length > 0) {
        return (
            <div className="mt-10">
                <h1 className="font-bold text-2xl m-4 mt-0">
                    Rooms about{" "}
                    <span className="text-blue-500 cursor-pointer hover:underline">
                        {category.name}
                    </span>
                </h1>
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
                    {data.map((room) => (
                        <Carousel.Item key={room._id}>
                            <Card key={room._id} props={room} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        );
    } else {
        return null;
    }
}
