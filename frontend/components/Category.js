import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Category() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/v1/categories")
            .then((res) => setCategories(res.data.data.categories))
            .catch((err) => console.log(err));
    });

    return (
        <div className="flex flex-wrap sm:overflow-x-auto">
            {categories.map((category) => (
                <React.Fragment key={category._id}>
                    <div className="hidden md:inline-block flex-none w-80 group cursor-pointer mr-5 mb-4">
                        <div className="h-60 w-full">
                            <img
                                src="/Python-language.png"
                                className="object-cover border rounded-md h-full w-full mix-blend-multiply transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ..."
                            />
                        </div>
                        <div className="mt-2">
                            <h1 className="font-bold">{category.name}</h1>
                        </div>
                    </div>
                    <div className="flex-initial mt-2 mb-2 md:hidden">
                        <h1 className="rounded-full border py-1 px-3 mr-2 font-bold border-black hover:bg-gray-200 flex items-center justify-center">
                            {category.name}
                        </h1>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}
