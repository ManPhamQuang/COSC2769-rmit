import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Card from "../../components/Card";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import NavBar from "../../components/navbar/NavBar";
import TeacherProfile from "../../components/TeacherProfile";
import { toast } from 'react-toastify';


const roomFetcher = (url) =>
    axios
        .get(url)
        .then((res) => res.data.data)
        .catch((error) => {
            toast.error(error.response?.data?.message ?? "Server Error! Please try again later");
        });


export default function ExpertProfile() {
 
    const router = useRouter();
    const _id = router.query._id;
    const url = `/users/${_id}`;

    //Fetch room detail from server. (NOTE: Check _id to fix bug SWR with query undefined)
    const { data, roomErr } = useSWR(
        _id ? url : null,
        _id ? roomFetcher : null
    );

    return (
        <div>
        <div>
            {data && (
                <div>
                    <TeacherProfile key={data}
                            props={data} />
                  
                </div>
            )}
        </div>
    </div>
    );
}
