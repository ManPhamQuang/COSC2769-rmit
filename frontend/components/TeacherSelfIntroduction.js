import React from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function teacherSelfIntroduction({ props }) {
    // const { id, name, rating, seftIntroduction} = props;
    return (
        <div className="mt-2">
            <div>
                <p className="font-bold text-3xl mb-2">Instructor</p>
                <p className="font-bold uppercase tracking-wide text-lg text-indigo-500">
                    {props.name}
                </p>
                <p className="font-bold tracking-wide text-lg text-gray-600">
                    {props.job}
                </p>
            </div>
            <div>
                <div className="grid grid-cols-4 py-2">
                    <div className="flex justify-center">
                        <img
                            alt="Expert Avatar"
                            src={props.avatar}
                            className="inline object-cover rounded-full h-30 w-30 md:h-40 w-40"
                        />
                    </div>
                    <div className="col-span-3 flex items-center">
                        <div className="space-y-4">
                            <div className="inline">
                                <StarIcon className="h-5 w-5 text-yellow-500 inline mb-1" />
                                <p className="text-gray-600 inline">
                                    {props.rating}
                                </p>
                                <p className="text-gray-600 inline">
                                    &nbsp;Instructor Rating
                                </p>
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 inline mb-1 ml-1"
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
                                <p className="text-gray-600 inline">
                                    &nbsp;{props.roomAmount}&nbsp;rooms
                                </p>
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 inline mb-1 ml-1"
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
                                <p className="text-gray-600 inline">
                                    &nbsp;{props.reviewerAmount}&nbsp;reviews
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <p className="mt-1 dark:text-white">{props.seftIntroduction}</p>
            </div>
        </div>
    );
}
