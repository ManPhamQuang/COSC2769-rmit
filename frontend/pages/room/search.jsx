import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import NavBar from "../../components/navbar/NavBar";
import SkeletonCard from "../../components/SkeletonCard";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";

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
    const { data, error } = useSWR(
        ["http://localhost:5000/api/v1/rooms", term],
        fetcher
    );

    if (!data) {
        return (
            <div>
                <NavBar />
                <div className="container mt-4 mx-auto h-full p-5 lg:p-14">
                    <div className="mt-6 grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                    <h1 className="text-2xl font-semibold">
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
                <div className="mt-6 grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {data.data.rooms.map((room) => (
                        <Link href={`/room/${room._id}`}>
                            <div
                                className=" group cursor-pointer"
                                key={room._id}
                            >
                                <div>
                                    <div className="h-48 md:h-44 w-full group-hover:bg-gray-50 group-hover:border-gray-50 rounded-md">
                                        <img
                                            src={`/${room.thumbnail}`}
                                            className="object-cover border-gray-300 border rounded-md h-full w-full group-hover:bg-red-400 mix-blend-multiply"
                                        />
                                    </div>

                                    <div className="leading-snug mt-2">
                                        <h1 className="font-bold">
                                            {room.title}
                                        </h1>
                                        <p className="text-sm font-normal text-gray-500 truncate">
                                            {room.createdBy?.name}
                                        </p>
                                        <p className="text-yellow-700 font-semibold inline">
                                            4.7
                                        </p>
                                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                                        <p className="inline text-sm font-normal text-gray-500">
                                            (630,406)
                                        </p>
                                        <h1 className="font-bold">
                                            ${room.price}
                                        </h1>
                                        {room.category && (
                                            <div className="py-1 px-2 bg-yellow-200 inline-block rounded-sm">
                                                <p className="text-xs font-semibold mx-auto text-center">
                                                    {room.category?.name}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
