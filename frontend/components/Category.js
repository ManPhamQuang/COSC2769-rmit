import React from "react";

export default function Category({ props }) {
    const { id, name, image } = props;
    return (
        <div>
            <div className="hidden sm:inline-block flex-none w-80 group cursor-pointer">
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
            <div className=" flex-auto mt-2 sm:hidden">
                <h1 className="rounded-full border py-1 px-3 mr-2 font-bold border-black hover:bg-gray-200">
                    {name}
                </h1>
            </div>
        </div>
    );
}
