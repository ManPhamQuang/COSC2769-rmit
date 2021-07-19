import React from "react";
import Card from "./Card";

const data = [
    {
        id: 1,
        title: "Microsoft Excel - Excel from Beginner to Advanced",
        teacher: "Kyle Pew, Office Newb",
        rating: 4.6,
        views: "237,548",
        price: "$94,99",
        tag: "Bestseller",
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

export default function CardSlider() {
    // return (
    //     <div>
    //         <Slider {...settings}>
    //             {data.map((course) => (
    //                 <Card key={course.id} props={course} />
    //             ))}
    //         </Slider>
    //     </div>
    // );
    return (
        <div className="space-x-5 flex overflow-x-auto">
            {data.map((course) => (
                <Card key={course.id} props={course} />
            ))}
        </div>
    );
}
