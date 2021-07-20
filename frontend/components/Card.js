import React from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function Card({ props }) {
    const { id, title, teacher, rating, views, price, tag } = props;

    return (
        <div className="flex-none w-64 group cursor-pointer inline-block">
            <div className="h-36 w-full group-hover:bg-gray-50 group-hover:border-gray-50 rounded-md">
                <img
                    src="/Python-language.png"
                    className="object-cover border-gray-300 border rounded-md h-full w-full group-hover:bg-red-400 mix-blend-multiply"
                />
            </div>

            <div className="leading-snug mt-2">
                <h1 className="font-bold">{title}</h1>
                <p className="text-sm font-normal text-gray-500">{teacher}</p>
                <p className="text-yellow-700 font-semibold inline">{rating}</p>
                <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                <p className="inline text-sm font-normal text-gray-500">
                    ({views})
                </p>
                <h1 className="font-bold">{price}</h1>
                <div className="py-1 bg-yellow-200 w-16 rounded-sm">
                    <p className="text-xs font-semibold mx-auto text-center">
                        {tag}
                    </p>
                </div>
            </div>
        </div>
    );
}
