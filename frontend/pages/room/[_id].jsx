import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Card from "../../components/Card";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';

const roomFetcher = (url) => axios.get(url).then((res) => res.data.data);

export default function RoomDetail() {
  const router = useRouter();
  const _id = router.query._id;
  const url = `http://localhost:5000/api/v1/rooms/${_id}`;

  //Fetch room detail from server. (NOTE: Check _id to fix bug SWR with query undefined)
  const { data, roomErr } = useSWR(_id ? url : null, _id ? roomFetcher : null);

  const {state, dispatch} = useContext(AuthContext);
  
  const handleJoinRoom = (e) => {
    // Navigate to Log In page if can not find access Token
    if (!state.token) {
      router.push("/login");
    }

    router.push({
        pathname: '/room/join',
        query: { roomID: _id },
    });
    e.preventDefault();
  };

  return (
    <div>
      <h1>Room Detail page</h1>
      <h2>RoomID: {_id}</h2>
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
