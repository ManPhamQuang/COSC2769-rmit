import React from "react";
import Card from "./Card";

export default function CardSlider({ rooms }) {
    return (
        <div className="grid  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {rooms.map((room) => (
                <Card key={room._id} props={room} />
            ))}
        </div>
    );
}
