import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Card from "../../components/Card";
import router from "next/router";

const roomFetcher = (url) => axios.get(url).then((res) => res.data.data);
const userFetcher = (url, token) =>
  axios
    .get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data.data);

export default function RoomDetail() {
  const router = useRouter();
  const _id = router.query._id;
  const url = `http://localhost:5000/api/v1/rooms/${_id}`;

  // Fix bug SWR with query undefined
  const { data, roomErr } = useSWR(_id ? url : null, _id ? roomFetcher : null);

  // Fix bug localStorage undefined in NextJS
  const getAccessToken = () => {
    let accessToken = null;
    if (typeof window !== "undefined") {
      accessToken = localStorage.getItem("accessToken") ?? null;
    }
    return accessToken;
  };

  let accessToken = getAccessToken();
  const { data: user, userErr } = useSWR(
    ["http://localhost:5000/api/v1/users/getMe", accessToken],
    userFetcher
  );

  const handleJoinRoom = (e) => {
    console.log(_id);
    console.log(user);
    console.log(data.room);
    if (!accessToken) {
      router.push("/login");
    }

    e.preventDefault();
  };

  return (
    <div>
      <h1>Room Detail page</h1>
      <h2>{_id}</h2>
      {data && (
        <div className="container mt-20 mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full ">
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
  );
}
