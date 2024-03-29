import axios from "../axios";
import useSWR from "swr";
import SkeletonCard from "../SkeletonCard";
import Pagination from "./Pagination";
import SearchCard from "./SearchCard";
import { toast } from 'react-toastify';

const fetcher = (url, term) =>
    axios
        .get(url, {
            params: {
                sort: "-startedAt",
                title: term,
                limit: 1000
            },
        })
        .then((res) => res.data)
        .catch((error) => {
            toast.error(error.response?.data?.message ?? "Server Error! Please try again later");
        });

const SearchResult = ({ term }) => {
    const { data, error } = useSWR(["/rooms", term], fetcher);

    if (!data) {
        return (
            <div className="container mx-auto h-full p-5 lg:p-14">
                <div className="mt-24 grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>
            </div>
        );
    }

    // if (error) return <h1 className="mt-24">error!</h1>;

    if (data.length === 0) {
        return (
            <div className="container mx-auto h-full p-5 lg:p-14">
                <h1 className="mt-6 text-2xl font-semibold">
                    No results found for "{term}"
                </h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto h-full p-5 lg:p-14">
            {data.length === 1 ? (
                <h1 className="mt-6 text-2xl font-semibold">
                    {data.length} result for "{term}"
                </h1>
            ) : (
                <h1 className="mt-6 text-2xl font-semibold">
                    {data.length} results for "{term}"
                </h1>
            )}
            <div className="mt-6 grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.data.rooms.map((room) => (
                    <SearchCard key={room._id} room={room} />
                ))}
            </div>
        </div>
    );
};

export default SearchResult;
