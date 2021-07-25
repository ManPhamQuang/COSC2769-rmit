import React from "react";
import {
    StarIcon,
    ExclamationCircleIcon,
    GlobeAltIcon,
    DocumentTextIcon,
    HeartIcon,
    ShareIcon,
    GiftIcon,
} from "@heroicons/react/solid";

export default function RoomDetailHeader() {
    return (
        <div>
            <div className="bg-black z-0">
                <div className="container ml-80 w-5/12 h-auto py-12 leading-loose">
                    <p className="text-4xl subpixel-antialiased text-white font-bold pb-2">
                        Python and JavaScript for beginners: Build 10 Projects
                    </p>
                    <p className="text-2xl subpixel-antialiased text-white">
                        Learn to code using Python and JavaScript
                    </p>
                    <p className="text-yellow-500 font-semibold inline">4.7</p>
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <p className="inline text-base text-white">
                        &nbsp;(91 ratings) &nbsp;30,000 students
                    </p>
                    <p className="text-base text-white">Created by Thien An</p>
                    <div className="flex items-center mt-1">
                        <ExclamationCircleIcon className="text-white h-5 w-5 inline" />
                        <p className="inline text-base text-white">
                            &nbsp;Last updated 6/2021&nbsp;
                        </p>
                        <GlobeAltIcon className="text-white h-5 w-5 inline" />
                        <p className="inline text-base text-white">
                            &nbsp;English&nbsp;
                        </p>
                        <DocumentTextIcon className="text-white h-5 w-5 inline" />
                        <p className="inline text-base text-white">
                            &nbsp;English [Auto]&nbsp;
                        </p>
                    </div>
                    <div className="flex items-center mt-4 space-x-3">
                        <button className="inline text-base text-white font-semibold border p-2 flex items-center hover:bg-gray-800">
                            Wishlist&nbsp;
                            <HeartIcon className="text-white h-5 w-5 inline" />
                        </button>
                        <button className="inline text-base text-white font-semibold border p-2 flex items-center hover:bg-gray-800">
                            Share&nbsp;
                            <ShareIcon className="text-white h-5 w-5 inline" />
                        </button>
                        <button className="inline text-base text-white font-semibold border p-2 flex items-center hover:bg-gray-800">
                            Gift this course&nbsp;
                            <GiftIcon className="text-white h-5 w-5 inline" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute bg-white z-10 border w-80 h-screen top-14 right-4 mr-80 shadow-xl">
                <div className="px-5 py-4 space-y-3">
                    <p className="text-4xl subpixel-antialiased font-bold">
                        $89.99
                    </p>
                    <button className="text-1xl text-white font-bold bg-purple-600 py-3 w-full hover:bg-purple-800">
                        Add to cart
                    </button>
                    <button className="text-1xl font-bold py-3 w-full hover:bg-gray-300 border border-black">
                        Buy now
                    </button>
                    <p className="text-xs text-center">
                        30-Day Money-Back Guarantee
                    </p>
                    <p className="text-base font-bold ">
                        This workshop includes:
                    </p>
                </div>
            </div>
        </div>
    );
}
