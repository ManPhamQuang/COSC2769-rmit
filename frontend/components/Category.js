import React from "react";

export default function Category({ props }) {
    const { id, name, image } = props;
    return (
        <div className="flex-none w-80 group cursor-pointer inline-block ">
            <div className="h-60 w-full">
                <img
                    src={image}
                    className="object-cover border rounded-md h-full w-full mix-blend-multiply transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ..."
                />
            </div>
            <div className="mt-2">
                <h1 className="font-bold">{name}</h1>
            </div>
        </div>
    );
}
