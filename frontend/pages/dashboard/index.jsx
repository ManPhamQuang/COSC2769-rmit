import RoomTable from "../../components/RoomTable";
import DashboardLayout from "../../components/DashboardLayout";
import Head from "next/head";
import axios from "../../components/axios";
import useSWR from "swr";
import { AuthContextProvider } from "../../context/authContext/AuthContext";
import { toast } from 'react-toastify';

const fetcher = (url, token) =>
    axios
        .get(url, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.data.data)
        .catch((error) => {
            toast.error(error.response.data.message);
        });

export default function ExpertDashboard() {
    const token = localStorage.getItem("accessToken");
    const { data: user, error } = useSWR(["/users/getMe", token], fetcher);

    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div>{user ? <RoomTable user={user} /> : null}</div>
        </>
    );
}
