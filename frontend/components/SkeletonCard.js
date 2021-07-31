import React from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function SkeletonCard() {
    return (
        <div className="animate-pulse">
            <div className="h-36 w-full group-hover:bg-gray-50 group-hover:border-gray-50 rounded-md">
                <div className="border-gray-300 bg-gray-400 border rounded-md h-full w-full  mix-blend-multiply"></div>
            </div>

            <div className="leading-snug mt-2 space-y-1">
                <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                <div className="h-4 bg-gray-400 rounded"></div>
                <div className="h-4 bg-gray-400 rounded"></div>
                <div className="h-4 bg-yellow-400 rounded w-28"></div>
                <div className="h-4 bg-gray-400 rounded w-20"></div>
            </div>
        </div>
    );
}
