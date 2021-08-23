import Head from "next/head";
import RoomCardsSlider from "../components/RoomCardsSlider";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import axios from "axios";
import RandomRoomCardsSlider from "../components/RandomRoomCardsSlider";

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

export default function Home() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/v1/categories")
            .then((res) =>
                setCategories(getRandom(res.data.data.categories, 6))
            )
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Head>
                <title>Homepage</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="container mx-auto p-5 lg:p-14">
                <h1 className="font-bold text-4xl mt-24">What to learn next</h1>
                <div className="mt-10">
                    <h1 className="font-bold text-2xl m-4 mt-0">
                        Upcoming rooms
                    </h1>
                    <RoomCardsSlider
                        params={{
                            limit: 10,
                            sort: "-startedAt",
                            status: "pending",
                        }}
                    />
                </div>

                <div className="mt-10">
                    <h1 className="font-bold text-2xl m-4 mt-0">
                        Active rooms
                    </h1>
                    <RoomCardsSlider
                        params={{
                            limit: 10,
                            sort: "-startedAt",
                            status: "active",
                        }}
                    />
                </div>

                <div className="mt-10">
                    <h1 className="font-bold text-2xl m-4 mt-0">
                        Budget rooms
                    </h1>
                    <RoomCardsSlider
                        params={{
                            limit: 10,
                            sort: "price",
                        }}
                    />
                </div>

                {categories.map((category) => (
                    <RandomRoomCardsSlider
                        category={category}
                        key={category._id}
                    />
                ))}

                <Category />
            </div>
        </>
    );
}
