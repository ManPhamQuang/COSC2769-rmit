import Head from "next/head";
import VideoChat from '../../components/VideoChat';

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
                <VideoChat></VideoChat>
            </div>
        </>
    );
}
