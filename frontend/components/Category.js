import React, { useEffect, useState } from "react";
import axios from "./axios";
import { toast } from 'react-toastify';

export default function Category() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
            .get("/categories")
            .then((res) => setCategories(res.data.data.categories))
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    }, []);

    return (
        <div className="flex flex-wrap justify-around lg:justify-start mt-10">
            {categories.map((category) => (
                <React.Fragment key={category._id}>
                    <div className="hidden sm:inline-block flex-none w-52 group cursor-pointer mb-5 lg:mr-4 inline-block w-80 flex-none group cursor-pointer mb-5 ">
                        <div className="h-40 w-full lg:h-60">
                            <img
                                src="/default.png"
                                className="object-cover border rounded-md h-full w-full mix-blend-multiply lg:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                            />
                        </div>
                        <div className="mt-2">
                            <h1 className="font-bold">{category.name}</h1>
                        </div>
                    </div>
                    <div className="flex-initial mt-2 mb-2 sm:hidden">
                        <h1 className="rounded-full border py-1 px-2 mr-1 font-bold border-black hover:bg-gray-200 flex items-center justify-center text-center">
                            {category.name}
                        </h1>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}
