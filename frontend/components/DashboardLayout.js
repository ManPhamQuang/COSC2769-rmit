import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function DashboardLayout({ children }) {
    const { pathname } = useRouter(); // get current path

    const activeLinkClass = "p-3 hover:bg-gray-600 cursor-pointer ";
    const inactiveLinkClass = "p-3 hover:bg-gray-600 cursor-pointer opacity-60";
    let ScreenName = "";
    switch (pathname) {
        case "/dashboard":
            ScreenName = "Dashboard";
            break;
        case "/profile":
            ScreenName = "Profile";
    }

    return (
        <div className="flex bg-gray-100">
            <aside className="bg-gray-700 w-64 min-h-screen flex flex-col">
                <div className="bg-gray-700 border-r border-b-gray-800 border-b px-4 h-10 flex items-center">
                    <span className="text-white py-2">Expert Dashboard</span>
                </div>

                <div className="bg-gray-700 border-r py-4 flex-grow text-white">
                    <nav>
                        <ul>
                            <Link href="/dashboard">
                                <li
                                    className={
                                        pathname === "/dashboard"
                                            ? activeLinkClass
                                            : inactiveLinkClass
                                    }
                                >
                                    Dashboard
                                </li>
                            </Link>

                            <Link href="/profile">
                                <li
                                    className={
                                        pathname === "/profile"
                                            ? activeLinkClass
                                            : inactiveLinkClass
                                    }
                                >
                                    Profile
                                </li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </aside>

            <main className="flex-grow flex flex-col min-h-screen">
                <header className="bg-white border-b h-10 flex items-center justify-center">
                    <div className="flex flex-grow items-center justify-between px-3">
                        <h1 className="text-lg">{ScreenName}</h1>
                        <button className="text-blue-700 underline">
                            Log in
                        </button>
                    </div>
                </header>
                {children}
            </main>
        </div>
    );
}
