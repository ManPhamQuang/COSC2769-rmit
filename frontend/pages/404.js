import Link from "next/link";

export default function Custom404() {
    return (
        <div className="flex flex-col h-96 justify-center items-center">
            <div className="flex divide-x divide-gray-200 ">
                <h1 className="text-5xl text-indigo-600 font-extrabold px-6">
                    404
                </h1>
                <div className="flex flex-col px-6">
                    <h1 className="text-5xl text-gray-800 font-extrabold">
                        Page Not Found
                    </h1>
                    <h2 className="mt-3 text-base text-gray-500">
                        Please check the URL in the address bar and try again
                    </h2>
                </div>
            </div>
            <div className="mt-10">
                <Link href="/">
                    <button className="bg-indigo-600 text-white p-3 rounded-md">
                        Go back to Homepage
                    </button>
                </Link>
            </div>
        </div>
    );
}
