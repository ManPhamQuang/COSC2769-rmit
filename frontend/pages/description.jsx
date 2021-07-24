import { useState, useRef, useReducer } from "react";
import TeacherSelfIntroduction from "../components/TeacherSelfIntroduction";

const courseInfor=[
    {
        id: 1,
        title: "Microsoft Excel - Excel from Beginner to Advanced",
        teacher: "Kyle Pew, Office Newb",
        rating: 4.6,
        views: "237,548",
        price: "$94,99",
        tag: "Bestseller",
        description:"Who this course is for: If you are an absolute beginner to coding, then take this course.If you are a seasoned programmer, then take this course to to get up to speed quickly with Swift 5.1 and native app development. Start with the Xcode walkthrough lesson and we'll get you familiar with iOS development in no time!If you are switching from Objective-C to Swift then this is a fast-track way of doing it. You can get started straight away with the Intermediate Swift Language module.If you are a pro iOS developer and want to quickly get up to date with Apple's latest technology, then start with the modules on SwiftUI, ARKit and CoreML.",
        features:[
            "Concepts of Object Oriented Programming (OOP): The type system, variables, functions and methods, inheritance, structures, classes and protocols.",
            "Control Structures: Using If/­Else clauses, Switch statements and logic to control the flow of execution.",
            "Data Structures: How to work with collections, such as arrays and dictionaries",
            "Software Design: How to organise and format code for readability and how to implement the Model ­View­ Controller (MVC) design pattern, Apple's favourite delegation pattern and the publisher pattern.",
        ]

    }
]
const teacherInfor=[
    {
        id:1,
        name: "Kyle Pew",

    }
]
const relevantCourses = [
    {
        id: 1,
        title: "Microsoft Excel - Excel from Beginner to Advanced",
        teacher: "Kyle Pew, Office Newb",
        rating: 4.6,
        views: "237,548",
        price: "$94,99",
        tag: "Bestseller",
        description:"Who this course is for: If you are an absolute beginner to coding, then take this course.If you are a seasoned programmer, then take this course to to get up to speed quickly with Swift 5.1 and native app development. Start with the Xcode walkthrough lesson and we'll get you familiar with iOS development in no time!If you are switching from Objective-C to Swift then this is a fast-track way of doing it. You can get started straight away with the Intermediate Swift Language module.If you are a pro iOS developer and want to quickly get up to date with Apple's latest technology, then start with the modules on SwiftUI, ARKit and CoreML."
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
const teacherSelfIntroduction=[{
    id:1,
    name:'Mimosa',
    rating:5,
    seftIntroduction:"I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees."
}]

export default function description (){
    
    return(
        <div>
            <div className="container mx-auto p-14">
                <div className="relative flex flex-col ">
                    <TeacherSelfIntroduction key={teacherSelfIntroduction.id} props={teacherSelfIntroduction}></TeacherSelfIntroduction>

                </div>
                
            </div>
        </div>
    );
}