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
            <div className="">
                <VideoChat></VideoChat>
            </div>
        </>
    );
}
