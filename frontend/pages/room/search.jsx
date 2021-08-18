import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import { useState, useEffect, useContext } from "react";
import NavBar from "../../components/navbar/NavBar";

const fetcher = (url, title) =>
    axios
        .get(url, {
            params: {
                sort: "-startedAt",
                status: "pending",
                title: title,
            },
        })
        .then((res) => res.data);

const Search = () => {
    const title = "development";
    const { data, error } = useSWR(
        ["http://localhost:5000/api/v1/rooms", title],
        fetcher
    );

    console.log(data);

    return (
        <div>
            <NavBar />
            <div className="container mt-6 mx-auto h-full">
                <h1 className="text-2xl font-semibold">Results for </h1>
            </div>
        </div>
    );
};

export default Search;
