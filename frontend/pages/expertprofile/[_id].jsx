import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Card from "../../components/Card";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import NavBar from "../../components/navbar/NavBar";
import TeacherProfile from "../../components/TeacherProfile";

const roomFetcher = (url) => axios.get(url).then((res) => res.data.data);

export default function ExpertProfile() {
 
    const router = useRouter();
    const _id = router.query._id;
    const url = `/rooms/${_id}`;

    //Fetch room detail from server. (NOTE: Check _id to fix bug SWR with query undefined)
    const { data, roomErr } = useSWR(
        _id ? url : null,
        _id ? roomFetcher : null
    );
    // const router = useRouter();
    // const _id = router.query._id;
    // const url = `/expertprofile/${_id}`;
    // const { data, roomErr } = useSWR(
    //     _id ? url : null,
    //     _id ? roomFetcher : null
    // );


    return (
        <div>
        <div>
            {data && (
                <div>
                    <TeacherProfile key={data.room.createdBy}
                            props={data.room.createdBy} />
                  
                </div>
            )}
        </div>
    </div>
    );
}
