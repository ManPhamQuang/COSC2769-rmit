import React, { useState, useEffect } from "react";
import axios from "./axios";
import RandomRoomCardsSlider from "./RandomRoomCardsSlider";

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

export default function RandomRoomsLists() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
            .get("/categories")
            .then((res) =>
                setCategories(getRandom(res.data.data.categories, 6))
            )
            .catch((error) => {
                toast.error(
                    error.response?.data?.message ??
                        "Server Error! Please try again later"
                );
            });
    }, []);
    return (
        <div>
            {categories.map((category) => (
                <RandomRoomCardsSlider category={category} key={category._id} />
            ))}
        </div>
    );
}
