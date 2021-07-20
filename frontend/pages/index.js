import Head from "next/head";
import { StarIcon } from "@heroicons/react/solid";
import Card from "../components/Card";
import Category from "../components/Category";

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

export default function Home() {
    return (
        <>
            <Head>
                <title>Homepage</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="container mx-auto p-14">
                <h1 className="font-bold text-4xl mb-4">What to learn next</h1>
                <h1 className="font-bold text-2xl mb-4">
                    Students are viewing
                </h1>
                <div className="space-x-5 flex overflow-x-auto">
                    {data.map((course) => (
                        <Card key={course.id} props={course} />
                    ))}
                </div>
                <h1 className="font-bold text-4xl mb-4 mt-8">Top categories</h1>
                <Category />
            </div>
        </>
    );
}
