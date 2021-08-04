import React, { useEffect, useState } from "react";
import RoomDetailBody from "../components/RoomDetailBody";
import RoomDetailHeader from "../components/RoomDetailHeader";
import axios from "axios";

export default function description() {
    const [room, setRoom] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/api/v1/rooms/60f552932152bb2281277f01")
            .then((res) => setRoom(res.data.data.room))
            .catch((err) => console.log(err));
    });

    return (
        <div>
            <RoomDetailHeader room={room} />
            <RoomDetailBody room={room} />
        </div>
    );
}
