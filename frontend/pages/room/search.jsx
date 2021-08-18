import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import { useState, useEffect, useContext } from "react";
import NavBar from "../../components/navbar/NavBar";

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
