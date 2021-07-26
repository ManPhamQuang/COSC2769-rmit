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
            <div className="bg-black z-0 w-full">
                <div className="container leading-loose mx-auto w-full h-auto px-4 text-left py-5 lg:ml-80 lg:w-5/12 h-auto py-12">
                    <p className="subpixel-antialiased text-white font-bold pb-2 text-1xl lg:text-4xl ">
                        Python and JavaScript for beginners: Build 10 Projects
                    </p>
                    <p className="subpixel-antialiased text-white text-base lg:text-2xl ">
                        Learn to code using Python and JavaScript
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
                    <div className="text-white text-2xl font-bold mt-2 lg:hidden">
                        <p>$89.99</p>
                    </div>
                    <div className="hidden lg:flex items-center mt-4 space-x-3">
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
                    <div className="block mt-4 space-y-3 pb-4 lg:hidden">
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
            <div className="hidden lg:inline-block absolute bg-white z-10 border w-80 h-screen top-14 right-9 mr-80 shadow-xl">
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
                    <p className="text-sm text-center">
                        30-Day Money-Back Guarantee
                    </p>
                    <p className="text-base font-bold ">
                        This workshop includes:
                    </p>
                </div>
            </div>
            <div className="fixed inline-flex justify-evenly bottom-0 w-full bg-white z-10 p-2 border-t-2 space-x-4 lg:hidden">
                <div className="inline-flex items-center ">
                    <p className="inline text-2xl font-bold w-3/12">$89.99</p>
                </div>
                <button className="inline w-9/12 bg-black text-white p-2">
                    Buy now
                </button>
            </div>
        </div>
    );
}
