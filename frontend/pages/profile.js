import React from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function Profile() {
    return (
        <div>
            <h1>profile</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                vulputate aliquam lobortis. In auctor mauris quis semper porta.
                Donec quam ex, scelerisque a sodales in, faucibus sed mauris.
                Suspendisse vitae aliquam risus. Aliquam erat volutpat. Fusce
                sapien nibh, accumsan fermentum pretium et, ultricies id est.
                Nam tristique maximus leo in fermentum. Nullam finibus elementum
                ipsum, ac hendrerit metus finibus a. Aenean molestie dolor quam,
                id tristique mauris auctor in. Suspendisse auctor in erat a
                iaculis. Fusce dictum lectus non consectetur sollicitudin.
                Curabitur luctus egestas ligula, at sollicitudin libero bibendum
                et. Quisque egestas erat id vehicula iaculis. Donec tincidunt
                aliquam eleifend. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Mauris eget blandit sem, vel aliquet dolor.
                Pellentesque porta mi tortor, vel rutrum dolor porttitor eu.
                Aliquam sodales ac ligula sit amet consectetur. Donec pulvinar,
                dui eget venenatis commodo, lectus erat rhoncus nulla, vitae
                elementum nibh nulla sed nibh. Duis consectetur, eros ac
                pulvinar viverra, nisl leo aliquet lacus, tempor maximus quam
                urna in arcu. Proin in dapibus lorem. Quisque vel sapien orci.
                Ut ut sapien non ante suscipit dictum at placerat risus. Etiam
                eleifend enim et ex ultricies convallis. Nulla non dictum felis.
                Vivamus accumsan aliquam nisi, quis feugiat est blandit rutrum.
                Phasellus mattis vulputate tincidunt. Phasellus nec gravida
                dolor.
            </p>
        </div>
    );
}

Profile.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
