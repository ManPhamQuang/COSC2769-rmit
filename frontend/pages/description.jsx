import React, { useEffect, useState } from "react";
import RoomDetailBody from "../components/RoomDetailBody";
import RoomDetailHeader from "../components/RoomDetailHeader";
import axios from "axios";

export default function description({room}) {

    // const [room, setRoom] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:5000/api/v1/rooms/${room_id}")
    //         .then((res) => setRoom(res.data.data.room))
    //         .catch((err) => console.log(err));
    // });

    return (
        <div>
            <RoomDetailHeader room={room} />
            <RoomDetailBody room={room} />
        </div>
    );
}


