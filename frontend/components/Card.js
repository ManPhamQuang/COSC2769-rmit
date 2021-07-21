import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import Tippy from "@tippyjs/react/headless";
import DateFormatter from "../utils/DateFormat";

const color = "pink";

export default function Card({ props }) {
    const {
        _id,
        title,
        createdBy,
        price,
        description,
        thumbnail,
        createdAt,
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
                            <div className="p-6 leading-snug">
                                {/* <div
                                className={`bg-gray-600 opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg`}
                            >
                                {color} tooltip title
                            </div> */}
                                <h1 className="font-bold">{title}</h1>
                                <p className="text-sm font-normal text-gray-500">
                                    {createdBy}
                                </p>
                                <p className="text-sm font-normal text-green-700">
                                    Published on{" "}
                                    <span className="font-semibold">
                                        {DateFormatter(createdAt)}
                                    </span>
                                </p>
                                <div className="py-1 bg-yellow-200 w-16 rounded-sm">
                                    <p className="text-xs font-semibold mx-auto text-center">
                                        {category}
                                    </p>
                                </div>
                                <div className="">{description}</div>
                            </div>
                        </div>
                    </div>
                )}
            >
                <div className=" group cursor-pointer">
                    <div>
                        <div className="h-36 w-full group-hover:bg-gray-50 group-hover:border-gray-50 rounded-md">
                            <img
                                src={
                                    thumbnail && thumbnail !== ""
                                        ? thumbnail
                                        : "/Python-language.png"
                                }
                                className="object-cover border-gray-300 border rounded-md h-full w-full group-hover:bg-red-400 mix-blend-multiply"
                            />
                        </div>

                        <div className="leading-snug mt-2">
                            <h1 className="font-bold">{title}</h1>
                            <p className="text-sm font-normal text-gray-500 truncate">
                                {createdBy}
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
                            <h1 className="font-bold">{price}</h1>
                            <div className="py-1 bg-yellow-200 w-16 rounded-sm">
                                <p className="text-xs font-semibold mx-auto text-center">
                                    {category}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
