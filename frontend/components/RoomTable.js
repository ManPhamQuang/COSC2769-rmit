import React from "react";
import useBreakpoint from "../hooks/useBreakpoint";
import useSWR from "swr";
import axios from "axios";
import DateFormatter from "../utils/DateFormat";

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
                <p className="mt-1 text-sm text-gray-600">
                    This list contains all rooms created by you. You can edit
                    any room's detail by clicking on the row or the Edit button.
                </p>
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
                                    </tr>
                                </thead>

                                {rooms ? (
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {rooms.map((room) => {
                                            let color = "";
                                            if (room.status == "active") {
                                                color =
                                                    "bg-green-100 text-green-800";
                                            } else if (
                                                room.status == "pending"
                                            ) {
                                                color =
                                                    "bg-yellow-100 text-yellow-700";
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
                                                    <td className="px-3 py-2 whitespace-nowrap text-right text-sm font-medium">
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
