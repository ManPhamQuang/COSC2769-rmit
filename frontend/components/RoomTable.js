import React from "react";
import useSWR from "swr";
import axios from "axios";
import DateFormatter from "../utils/DateFormat";
import Link from "next/link";

const fetcher = (url, token) =>
    axios
        .get(url, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.data.data.rooms);

export default function RoomTable({ user }) {
    const token = localStorage.getItem("accessToken");
    const { data: rooms, error } = useSWR(
        [`http://localhost:5000/api/v1/rooms?createdBy=${user._id}`, token],
        fetcher
    );
    const SkeletonRows = () => (
        <tbody className="animate-pulse bg-white divide-y divide-gray-200">
            <tr>
                <td className="h-[41px] bg-gray-200 mb-6"></td>
                <td className="h-[41px] bg-gray-300 mb-6"></td>
                <td className="h-[41px] bg-red-200 mb-6"></td>
                <td className="h-[41px] bg-gray-300 mb-6"></td>
                <td className="h-[41px] bg-gray-200 mb-6"></td>
            </tr>
            <tr>
                <td className="h-[41px] bg-gray-300 mb-6"></td>
                <td className="h-[41px] bg-gray-200 mb-6"></td>
                <td className="h-[41px] bg-green-100 mb-6"></td>
                <td className="h-[41px] bg-gray-200 mb-6"></td>
                <td className="h-[41px] bg-gray-300 mb-6"></td>
            </tr>
            <tr>
                <td className="h-[41px] bg-gray-200 mb-6"></td>
                <td className="h-[41px] bg-gray-300 mb-6"></td>
                <td className="h-[41px] bg-yellow-100 mb-6"></td>
                <td className="h-[41px] bg-gray-300 mb-6"></td>
                <td className="h-[41px] bg-gray-200 mb-6"></td>
            </tr>
        </tbody>
    );
    if (error) {
        return <h1>ERROR</h1>;
    }

    return (
        <div className="p-5 lg:p-10">
            <div className="">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Your Rooms
                </h3>
                <div className="lg:flex justify-between items-center block">
                    <p className="mt-1 text-sm text-gray-600">
                        This list contains all rooms created by you. You can edit
                        any room's detail by clicking on the row or the Edit button.
                    </p>
                    <Link href="/room/create">
                        <button className="flex items-center hover:bg-indigo-600 p-2 rounded-md bg-indigo-500 text-white mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <span className="text-sm">Create Room</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mt-5 flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Begin at
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            className="relative px-6 py-3"
                                        >
                                            <span className="sr-only">
                                                Edit
                                            </span>
                                        </th>
                                        <th
                                            scope="col"
                                            className="relative px-6 py-3"
                                        >
                                            <span className="sr-only">
                                                Join
                                            </span>
                                        </th>
                                        <th
                                            scope="col"
                                            className="relative px-6 py-3"
                                        >
                                            <span className="sr-only">
                                                Copy Link
                                            </span>
                                        </th>
                                    </tr>
                                </thead>

                                {rooms ? (
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {rooms.map((room) => {
                                            let color = "";
                                            let joinButtonColor =
                                                "border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline";
                                            let joinButton = "";
                                            if (room.status == "active") {
                                                color =
                                                    "bg-green-100 text-green-800";
                                                joinButton = "yes";
                                            } else if (
                                                room.status == "pending"
                                            ) {
                                                color =
                                                    "bg-yellow-100 text-yellow-700";
                                                joinButton = "yes";
                                            } else {
                                                color =
                                                    "bg-red-200 text-red-700";
                                            }
                                            return (
                                                <tr
                                                    key={room._id}
                                                    className="group cursor-pointer hover:bg-gray-200 cursor"
                                                >
                                                    <td className="px-3 py-2 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div
                                                                className={`text-sm text-gray-500 max-w-[160px] xl:max-w-none truncate`}
                                                            >
                                                                {room.title}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 py-2 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
                                                            {DateFormatter(
                                                                room.startedAt
                                                            )}
                                                        </div>
                                                        {/* <div className="text-sm text-gray-500">{room.status}</div> */}
                                                    </td>
                                                    <td className="px-3 py-2 whitespace-nowrap">
                                                        <span
                                                            className={`px-2 inline-flex text-xs leading-5 font-semibold ${color} rounded-full`}
                                                        >
                                                            {room.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                                                        {room.category?.name}
                                                    </td>
                                                    <td>
                                                        <a href="#">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-6 w-6 ml-3 "
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="green"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </td>
                                                    <td className="inline-block m-1 w-20 h-8 text-xs pt-1.5 font-medium text-center  transition bg-transparent border-2 border-indigo-500 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none">
                                                        <a
                                                            href="#"
                                                            className=" text-indigo-600"
                                                        >
                                                            Copy Link
                                                        </a>
                                                    </td>
                                                    <td className="px-3 py-2 whitespace-nowrap  text-sm font-medium ">
                                                        <a
                                                            href="#"
                                                            className="text-indigo-600 hover:text-indigo-900"
                                                        >
                                                            Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                ) : (
                                    <SkeletonRows />
                                )}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
