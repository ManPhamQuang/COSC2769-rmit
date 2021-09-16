import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function teacherSelfIntroduction({ props }) {
    const {
        _id,
        name,
        job,
        avatar,
        ratingsAverage,
        roomAmount,
        reviewerAmount,
        description,
    } = props;
    console.log(_id);
    return (
        <div className="mt-2">
            <Link href={`/expertprofile/${_id}`}>
                <div class="cursor-pointer">
                    <div>
                        <p className="font-bold text-1xl mb-2 lg:text-3xl">
                            Instructor
                        </p>

                        <p className="font-bold uppercase tracking-wide text-sm text-indigo-500 lg:text-lg">
                            {name}
                        </p>

                        <p className="font-bold tracking-wide text-sm text-gray-600 lg:text-base">
                            {job}
                        </p>
                    </div>
                    <div>
                        <div className="grid grid-cols-4 py-2">
                            <div className="flex justify-center">
                                <img
                                    alt="Expert Avatar"
                                    src={avatar}
                                    className="inline object-cover rounded-full h-26 w-26 md:h-40 w-40"
                                />
                            </div>
                            <div className="col-span-3 flex items-center pl-10">
                                <div className="space-y-4">
                                    <div className="inline">
                                        <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1 lg:h-5 lg:w-5" />
                                        <p className="text-gray-600 inline text-sm lg:text-base">
                                            1,578
                                        </p>
                                        <p className="text-gray-600 inline text-sm lg:text-base">
                                            &nbsp;Instructor Rating
                                        </p>
                                    </div>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 inline mb-1 ml-1 lg:h-5 lg:w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <p className="text-gray-600 inline text-sm lg:text-base">
                                            5 rooms
                                        </p>
                                    </div>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 inline mb-1 ml-1 lg:h-5 lg:w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                            />
                                        </svg>
                                        <p className="text-gray-600 inline text-sm lg:text-base">
                                            &nbsp;123&nbsp;reviews
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p className="mt-1 text-sm text-justify mb-20 lg:text-base">
                            {description}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
