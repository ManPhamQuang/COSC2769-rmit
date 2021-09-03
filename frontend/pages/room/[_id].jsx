import { useRouter } from "next/router";
import axios from "../../components/axios";
import useSWR from "swr";
import RoomDetailBody from "../../components/RoomDetailBody";
import RoomDetailHeader from "../../components/RoomDetailHeader";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

const roomFetcher = (url) =>
    axios
        .get(url)
        .then((res) => res.data.data)
        .catch((error) => {
            toast.error(
                error.response?.data?.message ??
                    "Server Error! Please try again later"
            );
        });

export default function RoomDetail() {
    const router = useRouter();
    const _id = router.query._id;
    const url = `/rooms/${_id}`;
    const { state } = useContext(AuthContext);
    const [hasPaid, setHasPaid] = useState(false);
    //Fetch room detail from server. (NOTE: Check _id to fix bug SWR with query undefined)
    const { data, roomErr } = useSWR(
        _id ? url : null,
        _id ? roomFetcher : null
    );

    useEffect(() => {
        const checkIfPaid = async () => {
            if (state?.user?.email) {
                try {
                    const request = await axios.post(
                        "/transactions/checkIfPaid",
                        { roomId: _id },
                        {
                            headers: {
                                Authorization: `Bearer ${state.token}`,
                            },
                        }
                    );
                    console.log(request);
                    setHasPaid(request.data.data.hasPaid);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        checkIfPaid();
    }, [state?.user]);
    console.log(data);
    return (
        <div>
            <div>
                {data && (
                    <div>
                        <RoomDetailHeader room={data.room} hasPaid={hasPaid} />
                        <RoomDetailBody room={data.room} hasPaid={hasPaid} />
                    </div>
                )}
            </div>
        </div>
    );
}
