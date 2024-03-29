import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import Tippy from "@tippyjs/react/headless";
import DateFormatter from "../utils/DateFormat";
import DateTimeFormatter from "../utils/DateTimeFormat";
import Link from "next/link";
import router from "next/router";

export default function Card({ props }) {
    const {
        _id,
        title,
        createdBy,
        price,
        description,
        thumbnail,
        createdAt,
        startedAt,
        category,
        status,
    } = props;

    return (
        <div>
            <Tippy
                placement="right"
                interactive={true}
                render={(attrs) => (
                    // Tooltip
                    <div tabIndex="-1" {...attrs}>
                        <div
                            className={`bg-white mb-28 block z-50 font-normal border-2 shadow-lg leading-normal  max-w-xs text-left no-underline break-words rounded-lg`}
                        >
                            <div className="p-4 leading-snug">
                                <h1 className="font-bold">{title}</h1>
                                <p className="text-sm font-normal text-gray-500">
                                    Status:{" "}
                                    <span className="font-semibold">
                                        {status}
                                    </span>
                                </p>
                                <p className="text-sm font-normal text-green-700">
                                    Starts at{" "}
                                    <span className="font-semibold">
                                        {DateTimeFormatter(startedAt)}
                                    </span>
                                </p>
                                {category && (
                                    <div className="py-1 px-2 bg-yellow-200 inline-block rounded-sm">
                                        <p className="text-xs font-semibold mx-auto text-center">
                                            {category?.name}
                                        </p>
                                    </div>
                                )}
                                <div className="line-clamp-5">
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            >
                <div
                    className=" group cursor-pointer"
                    onClick={() => router.push(`/room/${_id}`)}
                >
                    <div>
                        <div className="h-36 w-full group-hover:bg-gray-50 group-hover:border-gray-50 rounded-md">
                            <img
                                src={
                                    thumbnail &&
                                    thumbnail !== "" &&
                                    thumbnail !== "default.png" && // TODO: CLEAN DATA REMOVE ALL default.png or room.png
                                    thumbnail !== "room.png"
                                        ? thumbnail
                                        : "/default.png"
                                }
                                className="object-cover border-gray-300 border rounded-md h-full w-full  mix-blend-multiply"
                            />
                        </div>

                        <div className="leading-snug mt-2">
                            <h1 className="font-bold">{title}</h1>
                            <p className="text-sm font-normal text-gray-500 truncate">
                                {createdBy.name}
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
                            <h1 className="font-bold">${price}</h1>
                            {category && (
                                <div className="py-1 px-2 bg-yellow-200 inline-block rounded-sm">
                                    <p className="text-xs font-semibold mx-auto text-center">
                                        {category?.name}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
