import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import { useState, useEffect, useContext } from "react";
import NavBar from "../../components/navbar/NavBar";
import SkeletonCard from "../../components/SkeletonCard";
import Card from "../../components/Card";

const fetcher = (url, term) =>
    axios
        .get(url, {
            params: {
                sort: "-startedAt",
                status: "pending",
                title: term,
            },
        })
        .then((res) => res.data);

const Search = () => {
    const router = useRouter();
    const { term } = router.query;
    console.log(term);

    const { data, error } = useSWR(
        ["http://localhost:5000/api/v1/rooms", term],
        fetcher
    );

    console.log(data);

    if (!data) {
        return (
            <div>
                <NavBar />
                <div className="container mt-4 mx-auto h-full p-5 lg:p-14">
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </div>
                </div>
            </div>
        );
    }

    if (error) return <h1>error!</h1>;

    if (data.length === 0) {
        return (
            <div>
                <NavBar />
                <div className="container mt-4 mx-auto h-full p-5 lg:p-14">
                    <h1 className="text-2xl font-semibold text-center">
                        No results found for "{term}"
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <div>
            <NavBar />
            <div className="container mt-4 mx-auto h-full p-5 lg:p-14">
                {data.length === 1 ? (
                    <h1 className="text-2xl font-semibold">
                        {data.length} result for "{term}"
                    </h1>
                ) : (
                    <h1 className="text-2xl font-semibold">
                        {data.length} results for "{term}"
                    </h1>
                )}
                <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {data.data.rooms.map((room) => (
                        <Card key={room._id} props={room} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
