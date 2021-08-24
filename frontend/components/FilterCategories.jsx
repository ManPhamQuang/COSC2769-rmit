import React from "react";
import Card from "./Card";
import Carousel from "react-grid-carousel";

export default function FilterCategories({ rooms }) {
    return (
        <div>
            {rooms.length > 0 && (
                <div className="container mx-auto p-5 lg:p-14">
                    <h1 className="font-bold text-4xl pb-4">
                        {rooms[0].category.name} Courses
                    </h1>
                    <div className="mt-4">
                        <h1 className="font-bold text-2xl m-4 mt-0">
                            Courses to get you started
                        </h1>
                        <Carousel
                            cols={5}
                            responsiveLayout={[
                                {
                                    breakpoint: 1600,
                                    cols: 5,
                                    rows: 1,
                                    gap: 10,
                                    loop: true,
                                },
                                {
                                    breakpoint: 1280,
                                    cols: 4,
                                    rows: 1,
                                    gap: 10,
                                    loop: true,
                                },
                                {
                                    breakpoint: 1100,
                                    cols: 3,
                                    rows: 1,
                                    gap: 10,
                                    loop: true,
                                },
                                {
                                    breakpoint: 768,
                                    cols: 2,
                                    rows: 1,
                                    gap: 10,
                                    loop: true,
                                },
                            ]}
                        >
                            {rooms.map((room) => (
                                <Carousel.Item key={room._id}>
                                    <Card key={room._id} props={room} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
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
