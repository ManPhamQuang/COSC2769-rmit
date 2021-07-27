import RoomTable from "../components/RoomTable";
import DashboardLayout from "../components/DashboardLayout";
import Head from "next/head";

export default function ExpertDashboard() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div>
                <RoomTable />
            </div>
        </>
    );
}

ExpertDashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
