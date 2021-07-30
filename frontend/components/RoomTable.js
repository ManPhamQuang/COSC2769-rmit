import React from "react";
import useBreakpoint from "../hooks/useBreakpoint";

/* This example requires Tailwind CSS v2.0+ */
const rooms = [
    {
        _id: "53613131",
        title: "Development Bootcamp",
        beginAt: "20/07/2019",
        status: "over",
        category: "business",
    },
    {
        _id: "1321321321",
        title: "Agile Crash Course: Agile Project Management; Agile Delivery",
        beginAt: "12/04/2020",
        status: "pending",
        category: "music",
    },
    {
        _id: "2090909",
        title: "JavaScript Projects Bootcamp:HTML, CSS, VanillaJS, Bootstrap",
        beginAt: "18/06/2020",
        status: "active",
        category: "Fullstack Development",
    },
    {
        _id: "1203921",
        title: "Development Bootcamp",
        beginAt: "20/01/2021",
        status: "pending",
        category: "Machine Learning",
    },
    // Mock data
];

export default function RoomTable() {
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
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {rooms.map((room) => {
                                        let color = "";
                                        if (room.status == "active") {
                                            color =
                                                "bg-green-100 text-green-800";
                                        } else if (room.status == "pending") {
                                            color =
                                                "bg-yellow-100 text-yellow-700";
                                        } else {
                                            color = "bg-red-200 text-red-700";
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
                                                        {room.beginAt}
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
                                                    {room.category}
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
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
