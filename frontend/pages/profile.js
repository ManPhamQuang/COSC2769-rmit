import React from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Profile() {
    return (
        <div>
            <h1>profile</h1>
        </div>
    );
}

Profile.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
