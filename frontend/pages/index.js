import Head from "next/head";
import RoomCardsSlider from "../components/RoomCardsSlider";

export default function Home() {
    return (
        <>
            <Head>
                <title>Homepage</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="container mx-auto p-5 lg:p-14">
                <h1 className="font-bold text-4xl mb-4">What to learn next</h1>
                <h1 className="font-bold text-2xl mb-4">Upcoming rooms</h1>
                <RoomCardsSlider
                    params={{
                        limit: 10,
                        sort: "-startedAt",
                        status: "pending",
                    }}
                />
            </div>
        </>
    );
}
