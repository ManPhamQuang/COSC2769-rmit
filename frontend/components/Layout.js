import React from "react";
import NavBar from "./navbar/NavBar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
    const { pathname } = useRouter();
    const showNavBar = !pathname.includes("/room/join");

    return (
        <div>
            {showNavBar && <NavBar />}
            {children}
        </div>
    );
}
