import Head from "next/head";
import RoomCardsSlider from "../components/RoomCardsSlider";
import Category from "../components/Category";
import RandomRoomsLists from "../components/RandomRoomsLists";

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
                <h1 className="font-bold text-4xl">What to learn next</h1>
                <div className="mt-10">
                    <h1 className="font-bold text-2xl m-4 mt-0">
                        Upcoming rooms
                    </h1>
                    <RoomCardsSlider
                        params={{
                            limit: 10,
                            sort: "-startedAt",
                            status: "pending",
                        }}
                    />
                </div>

                <div className="mt-10">
                    <h1 className="font-bold text-2xl m-4 mt-0">
                        Active rooms
                    </h1>
                    <RoomCardsSlider
                        params={{
                            limit: 10,
                            sort: "-startedAt",
                            status: "active",
                        }}
                    />
                </div>

                <div className="mt-10">
                    <h1 className="font-bold text-2xl m-4 mt-0">
                        Budget rooms
                    </h1>
                    <RoomCardsSlider
                        params={{
                            limit: 10,
                            sort: "price",
                        }}
                    />
                </div>

                <RandomRoomsLists />

                <Category />
            </div>
        </>
    );
}
