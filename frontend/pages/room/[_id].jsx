import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Card from "../../components/Card";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import NavBar from "../../components/navbar/NavBar";

const roomFetcher = (url) => axios.get(url).then((res) => res.data.data);

export default function RoomDetail() {
    const router = useRouter();
    const _id = router.query._id;
    const url = `http://localhost:5000/api/v1/rooms/${_id}`;

    //Fetch room detail from server. (NOTE: Check _id to fix bug SWR with query undefined)
    const { data, roomErr } = useSWR(
        _id ? url : null,
        _id ? roomFetcher : null
    );

    const { state, dispatch } = useContext(AuthContext);

    const handleJoinRoom = (e) => {
        // Navigate to Log In page if can not find access Token
        if (!state.token) {
            router.push("/login");
        }

        router.push({
            pathname: "/room/join",
            query: { roomID: _id },
        });
        e.preventDefault();
    };

    return (
        <div>
            <NavBar />
            <div className="container mx-auto h-full">
                {data && (
                    <div className="p-2">
                        <div className="mt-32 flex content-center items-center justify-center">
                            <div className="w-full lg:w-4/12 px-4">
                                <Card props={data.room} />
                                <button
                                    className="bg-indigo-600 mt-4 text-white active:bg-indigo-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full "
                                    type="button"
                                    onClick={handleJoinRoom}
                                >
                                    Join Room
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Test Stripe only */}
            <div className="flex justify-center items-center mt-5">
                <button
                    className="py-2 px-5 bg-indigo-700 text-white uppercase tracking-wide rounded-md hover:shadow-md transition-all hover:bg-indigo-500"
                    onClick={async (e) => {
                        const token = localStorage.getItem("accessToken");
                        console.log(token);
                        try {
                            const request = await axios.get(
                                `http://localhost:5000/api/v1/checkouts/${_id}`,
                                {
                                    headers: {
                                        Authorization: "Bearer " + token,
                                    },
                                }
                            );
                            const { url } = request.data.data;
                            router.push(url);
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
}
