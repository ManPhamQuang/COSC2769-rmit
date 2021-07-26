import { React, useState, useRef, useReducer } from "react";
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
import RoomDetailHeader from "../components/RoomDetailHeader";

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
        avatar: "https://img-c.udemycdn.com/user/200_H/15722848_5948_3.jpg",
        name: "Angela",
        job: "Developer and Lead Instructor",
        rating: 5,
        roomAmount: 80,
        reviewerAmount: "314,629",
        seftIntroduction:
            "I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.",
    },
];
const listFeatures = courseInfor.features;
// const feature={courseInfor.map((listFeatures, index) => {
//       return (
//      <ol>
//         {items.map((subItems, sIndex) => {
//               return <li> {subItems} </li>;
//            })}
//          </ol>
//      );
// })}

const goal = [
    {
        courseGoal: [
            "Setup Python Development Environment",
            "Build a Digital Clock with Python",
            "Build a Music Player with Python",
            "Build a loan Calculator with Python",
            "Build an Analogue Clock with JavaScript",
            "Build a To-do App with JavaScript",
            "Build a Count Down Timer with JavaScript",
            "Learn Python Fundamentals",
            "Build a Currency Converter with Python",
            "Build an Image Slider with Python",
            "Learn JavaScript Fundamentals",
            "Build a Digital Calculator with JavaScript",
            "Build an interactive Quiz App with JavaScript",
        ],
    },
];

export default function description() {
    return (
        <div>
            <RoomDetailHeader />
            {/* <div className="container ml-80 w-5/12 h-auto py-4 "> */}

            <div className="max-w-md mx-auto rounded-xl md:max-w-2xl mt-4 ">
                <div className="relative flex flex-col">
                    <div className="uppercase tracking-wide text-lg dark:text-gray-200 font-semibold">
                        What you'll learn
                    </div>

                    <div class="bg-white dark:bg-gray-800 w- rounded-lg p-4 mb-6 shadow sm:inline-block">
                        <div class="md:flex items-start md:text-left">
                            <div class=" px-3 mb-6 md:mb-5 inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <p class="text-red text-s inline ml-1">
                                    Concepts of Object Oriented Programming
                                    (OOP): The type system, variables, functions
                                    and methods, inheritance, structures,
                                    classes and protocols.
                                </p>
                            </div>
                        </div>
                        <div class="md:flex items-start md:text-left">
                            <div class="px-3 mb-6 md:mb-5 inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <p class="text-red text-s inline ml-1">
                                    Concepts of Object Oriented Programming
                                    (OOP): The type system, variables, functions
                                    and methods, inheritance, structures,
                                    classes and protocols.
                                </p>
                            </div>
                        </div>
                        <div class="md:flex items-start md:text-left">
                            <div class=" px-3 mb-6 md:mb-5 inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <p class="text-red text-s inline ml-1">
                                    Concepts of Object Oriented Programming
                                    (OOP): The type system, variables, functions
                                    and methods, inheritance, structures,
                                    classes and protocols.
                                </p>
                            </div>
                        </div>
                        <div class="md:flex items-start md:text-left">
                            <div class=" px-3 mb-6 md:mb-5 inline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 inline"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <p class="text-red text-s inline ml-1">
                                    Concepts of Object Oriented Programming
                                    (OOP): The type system, variables, functions
                                    and methods, inheritance, structures,
                                    classes and protocols.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uppercase tracking-wide text-lg dark:text-gray-200 font-semibold">
                    Instructors
                </div>

                <div className="relative flex flex-col ">
                    <TeacherSelfIntroduction
                        key={teacherSelfIntroduction[0].id}
                        props={teacherSelfIntroduction[0]}
                    ></TeacherSelfIntroduction>
                </div>
            </div> */}
        </div>
    );
}
