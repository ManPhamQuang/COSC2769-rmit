import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const courseInfor = {
    id: 1,
    title: "Microsoft Excel - Excel from Beginner to Advanced",
    teacher: "Kyle Pew, Office Newb",
    rating: 4.6,
    views: "237,548",
    price: "$94,99",
    tag: "Bestseller",
    description:
        "Who this course is for: If you are an absolute beginner to coding, then take this course.If you are a seasoned programmer, then take this course to to get up to speed quickly with Swift 5.1 and native app development. Start with the Xcode walkthrough lesson and we'll get you familiar with iOS development in no time!If you are switching from Objective-C to Swift then this is a fast-track way of doing it. You can get started straight away with the Intermediate Swift Language module.If you are a pro iOS developer and want to quickly get up to date with Apple's latest technology, then start with the modules on SwiftUI, ARKit and CoreML.",
    features: [
        "Concepts of Object Oriented Programming (OOP): The type system, variables, functions and methods, inheritance, structures, classes and protocols.",
        "Control Structures: Using If/­Else clauses, Switch statements and logic to control the flow of execution.",
        "Data Structures: How to work with collections, such as arrays and dictionaries",
        "Software Design: How to organise and format code",
    ],
};

export default function RoomDetailBody() {
    return (
        <div className="w-full grid grid-cols-3 gap-2">
            <div className="col-span-2 px-24 py-6">
                <div className="border space-y-4 px-12 py-4 border-gray-300">
                    <p className="font-bold text-3xl">What you'll learn</p>
                    {courseInfor.features.map((feature) => (
                        <div className="">
                            <CheckIcon className="h-4 w-4 inline mb-1" />
                            <p className="inline">&nbsp;{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-24 py-6">
                <div className="px-5 py-4 space-y-3 border border-gray-300">
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
        </div>
    );
}
