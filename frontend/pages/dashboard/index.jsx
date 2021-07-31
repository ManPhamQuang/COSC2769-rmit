import RoomTable from "../../components/RoomTable";
import DashboardLayout from "../../components/DashboardLayout";
import Head from "next/head";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url, token) =>
    axios
        .get(url, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.data.data);

export default function ExpertDashboard() {
    const token = localStorage.getItem("accessToken");
    const { data: user, error } = useSWR(
        ["http://localhost:5000/api/v1/users/getMe", token],
        fetcher
    );

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

ExpertDashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
