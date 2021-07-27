import React from "react";

export default function RoomDetailBody({ name }) {
    return (
        <div className="md:flex items-start md:text-left">
            <div className=" px-3 mb-6 md:mb-5 inline">
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
                <p className="text-red text-s inline ml-1">{name}</p>
            </div>
        </div>
    );
}
