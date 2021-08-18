import React from "react";
import Card from "../components/Card";
import NavBar from "../components/navbar/NavBar";
import Head from "next/head";

export default function MyRooms() {
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

            <div className="container mx-auto px-4 bg-blue-200">
                <h1>My rooms</h1>
            </div>
        </>
    );
}
