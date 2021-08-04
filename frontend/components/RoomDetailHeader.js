import React from "react";
import {
    StarIcon,
    ExclamationCircleIcon,
    GlobeAltIcon,
    DocumentTextIcon,
    HeartIcon,
    ShareIcon,
    GiftIcon,
    CheckIcon,
} from "@heroicons/react/solid";

export default function RoomDetailHeader({ room }) {
    return (
        <div>
            <div className="bg-black z-0 w-full">
                <div className="container leading-loose mx-auto w-full h-auto px-4 py-5 text-center">
                    <p className="subpixel-antialiased text-white font-bold pb-2 text-1xl lg:text-4xl ">
                        {room.title}
                    </p>
                    <p className="subpixel-antialiased text-white text-base lg:text-2xl ">
                        {room.description}
                    </p>
                    <p className="text-yellow-500 font-semibold inline">4.7</p>
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                    <p className="inline text-white text-xs lg:text-base ">
                        &nbsp;(91 ratings) &nbsp;30,000 students
                    </p>
                    <p className="text-white text-xs lg:text-base">
                        Created by Thien An
                    </p>
                    <div className="w-full mx-auto flex justify-center">
                        <div className="items-center mt-1 block lg:flex ">
                            <div>
                                <ExclamationCircleIcon className="text-white h-5 w-5 inline" />
                                <p className="text-white inline text-sm lg:text-base">
                                    &nbsp;Last updated 6/2021&nbsp;
                                </p>
                            </div>
                            <div>
                                <GlobeAltIcon className="text-white h-5 w-5 inline" />
                                <p className="inline text-white text-sm lg:text-base">
                                    &nbsp;English&nbsp;
                                </p>
                            </div>
                            <div>
                                <DocumentTextIcon className="text-white h-5 w-5 inline" />
                                <p className="inline text-white text-sm lg:text-base">
                                    &nbsp;English [Auto]&nbsp;
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-white text-2xl font-bold mt-2 xl:hidden">
                        <p>${room.price}</p>
                    </div>
                    <div className="hidden xl:flex items-center mt-4 space-x-3 justify-center">
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
                    <div className="block mt-4 space-y-3 pb-4 xl:hidden">
                        <button className="text-base text-white font-bold bg-purple-600 p-2 w-full hover:bg-purple-800">
                            Add to cart
                        </button>
                        <p className="text-xs text-center text-white">
                            30-Day Money-Back Guarantee
                        </p>
                        <button className="w-full text-base text-white font-semibold border p-2 flex items-center justify-center hover:bg-gray-800">
                            Add to wishlist&nbsp;
                            <HeartIcon className="text-white h-4 w-4 inline" />
                        </button>
                        <button className="w-full text-base text-white font-semibold border p-2 flex items-center justify-center hover:bg-gray-800">
                            Share&nbsp;
                            <ShareIcon className="text-white h-4 w-4 inline" />
                        </button>
                        <button className="w-full text-base text-white font-semibold border p-2 flex items-center justify-center hover:bg-gray-800">
                            Gift this course&nbsp;
                            <GiftIcon className="text-white h-4 w-4 inline" />
                        </button>
                        <button className="w-full text-base text-white font-semibold border p-2 flex items-center justify-center hover:bg-gray-800">
                            Apply Coupon&nbsp;
                        </button>
                    </div>
                </div>
            </div>
            <div className="fixed inline-flex justify-evenly bottom-0 w-full bg-white z-10 p-2 border-t-2 space-x-4 xl:hidden">
                <div className="inline-flex items-center ">
                    <p className="inline text-2xl font-bold w-3/12">
                        ${room.price}
                    </p>
                </div>
                <button className="inline w-9/12 bg-black text-white p-2">
                    Buy now
                </button>
            </div>
        </div>
    );
}
