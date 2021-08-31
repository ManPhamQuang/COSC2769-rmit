import React from "react";
import SearchCard from "./searchResult/SearchCard";

export default function FilterCategories({ rooms }) {
    console.log(rooms.length);
    return (
        <div>
            {rooms.length > 0 && (
                <div className="container mx-auto p-5 lg:p-14">
                    <h1 className="font-bold text-4xl pb-4">
                        {rooms[0].category.name} Courses
                    </h1>
                    <div className="mt-6">
                        <h1 className="font-bold text-2xl m-4 mt-0">
                            Courses to get you started
                        </h1>
                    </div>
                    <div className="mt-6 grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {rooms.map((room) => (
                            <SearchCard key={room._id} room={room} />
                        ))}
                    </div>
                </div>
            )}
            {rooms.length == 0 && (
                <div className="container mx-auto p-5 lg:p-14">
                    <h1 className="font-bold text-4xl pb-4">
                        No course available.
                    </h1>
                </div>
            )}
        </div>
    );
}
