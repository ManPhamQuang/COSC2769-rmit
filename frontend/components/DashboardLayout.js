import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import useBreakpoint from "../hooks/useBreakpoint";
import { Transition } from "@headlessui/react";

export default function Wrapper(props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return <>{mounted && <DashboardLayout {...props} />}</>;
}

function DashboardLayout({ children }) {
    const { pathname } = useRouter(); // get current path
    const isStatic = useBreakpoint("sm");
    const [isClosed, setIsClosed] = useState(true);

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
        <>
            <div className="md:flex bg-gray-100">
                <Transition
                    show={isStatic || !isClosed}
                    enter="transition-all duration-500"
                    enterFrom="-ml-64"
                    enterTo="ml-0"
                    leave="transition-all duration-500"
                    leaveTo="-ml-64"
                >
                    <aside
                        className={
                            isStatic
                                ? "z-20 bg-gray-700 w-64 min-h-screen flex flex-col"
                                : "z-20 bg-gray-700 w-64 min-h-screen flex flex-col fixed border-"
                        }
                    >
                        <div className="bg-gray-700 border-r border-b-gray-800 border-b px-4 h-10 flex items-center justify-between">
                            <span className="text-white py-2">
                                Expert Dashboard
                            </span>
                            {!isStatic && (
                                <button
                                    tabIndex="1"
                                    className="w-10 p-1 text-white"
                                    onClick={() => setIsClosed(true)}
                                    aria-label="Close Menu"
                                    title="Close Menu"
                                >
                                    <XIcon />
                                </button>
                            )}
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
                                            onClick={() => setIsClosed(true)}
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
                                            onClick={() => setIsClosed(true)}
                                        >
                                            Profile
                                        </li>
                                    </Link>
                                </ul>
                            </nav>
                        </div>
                    </aside>
                </Transition>

                <Transition
                    appear={true}
                    show={!isStatic && !isClosed}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-75"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-50"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black opacity-50" />
                </Transition>
                <main className="flex-grow flex flex-col min-h-screen">
                    <header className="bg-white border-b h-10 flex items-center justify-center">
                        {!isStatic && (
                            <button
                                tabIndex="1"
                                aria-hidden={!isClosed}
                                className="w-10 p-1"
                                onClick={() => setIsClosed(false)}
                                aria-label="Open Menu"
                                title="Open Menu"
                            >
                                <MenuIcon />
                            </button>
                        )}
                        <div className="flex flex-grow items-center justify-between px-3">
                            <h1 className="text-lg">{ScreenName}</h1>
                            <button className="text-blue-700 underline">
                                Log out
                            </button>
                        </div>
                    </header>
                    {children}
                </main>
            </div>
        </>
    );
}
