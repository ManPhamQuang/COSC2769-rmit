import Head from "next/head";
import CardSlider from "../components/CardSlider";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/v1/rooms")
            .then((res) => setRooms(res.data.data.rooms))
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
                <h1 className="font-bold text-4xl mb-4">What to learn next</h1>
                <h1 className="font-bold text-2xl mb-4">
                    Students are viewing
                </h1>
                <CardSlider rooms={rooms} />
            </div>
        </>
    );
}
