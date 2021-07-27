import RoomTable from "../components/RoomTable";
import DashboardLayout from "../components/DashboardLayout";

export default function ExpertDashboard() {
    return <RoomTable />;
}

ExpertDashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
