import { useRouter } from "next/router";
import axios from "../../components/axios";
import useSWR from "swr";
import RoomDetailBody from "../../components/RoomDetailBody";
import RoomDetailHeader from "../../components/RoomDetailHeader";
import { toast } from 'react-toastify';

const roomFetcher = (url) =>
    axios
        .get(url)
        .then((res) => res.data.data)
        .catch((error) => {
            toast.error(error.response?.data?.message ?? "Server Error! Please try again later");
        });

export default function RoomDetail() {
    const router = useRouter();
    const _id = router.query._id;
    const url = `/rooms/${_id}`;

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
                        <RoomDetailHeader room={data.room} />
                        <RoomDetailBody room={data.room} />
                    </div>
                )}
            </div>
        </div>
    );
}
