import { useState, useRef, useReducer } from "react";
import TeacherSelfIntroduction from "../components/TeacherSelfIntroduction";
import {
    StarIcon,
    ExclamationCircleIcon,
    GlobeAltIcon,
    DocumentTextIcon,
    HeartIcon,
    ShareIcon,
    GiftIcon,
} from "@heroicons/react/solid";

const courseInfor = [
    {
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
            "Software Design: How to organise and format code for readability and how to implement the Model ­View­ Controller (MVC) design pattern, Apple's favourite delegation pattern and the publisher pattern.",
        ],
    },
];
const teacherInfor = [
    {
        id: 1,
        name: "Kyle Pew",
    },
];
const relevantCourses = [
    {
        id: 1,
        title: "Microsoft Excel - Excel from Beginner to Advanced",
        teacher: "Kyle Pew, Office Newb",
        rating: 4.6,
        views: "237,548",
        price: "$94,99",
        tag: "Bestseller",
        description:
            "Who this course is for: If you are an absolute beginner to coding, then take this course.If you are a seasoned programmer, then take this course to to get up to speed quickly with Swift 5.1 and native app development. Start with the Xcode walkthrough lesson and we'll get you familiar with iOS development in no time!If you are switching from Objective-C to Swift then this is a fast-track way of doing it. You can get started straight away with the Intermediate Swift Language module.If you are a pro iOS developer and want to quickly get up to date with Apple's latest technology, then start with the modules on SwiftUI, ARKit and CoreML.",
    },
    {
        id: 2,
        title: "Ultimate AWS Certified Solutions Architect Associate 2021",
        teacher:
            "Stephane Maarek | AWS Certified Cloud Practitioner,Solutions Architect,Developer",
        rating: 4.3,
        views: "289,029",
        price: "$94,99",
        tag: "Bestseller",
    },
    {
        id: 3,
        title: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
        teacher: "Maximilian Schwarzmüller",
        rating: 4.7,
        views: "237,548",
        price: "$94,99",
        tag: "Bestseller",
    },
    {
        id: 4,
        title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        teacher: "Maximilian Schwarzmüller",
        rating: 4.7,
        views: "630,406",
        price: "$94,99",
        tag: "Bestseller",
    },
];
const teacherSelfIntroduction = [
    {
        id: 1,
        name: "Mimosa",
        rating: 5,
        seftIntroduction:
            "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.",
    },
];

export default function description() {
    return (
        <div>
            <div className="p-14 bg-black">
                <div className="container mx-auto p-16 leading-loose">
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
            <div className="container mx-auto p-14">
                <div className="relative flex flex-col ">
                    <TeacherSelfIntroduction
                        key={teacherSelfIntroduction.id}
                        props={teacherSelfIntroduction}
                    ></TeacherSelfIntroduction>
                </div>
            </div>
        </div>
    );
}
