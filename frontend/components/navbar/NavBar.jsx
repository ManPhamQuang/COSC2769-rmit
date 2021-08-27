import React from "react";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "../axios";
import dynamic from "next/dynamic";
import router from "next/router";
import { toast } from 'react-toastify';

// Use dynamic import NextJS
const NavNonAuth = dynamic(() => import("./NavNonAuth"), { ssr: false });
const NavAuth = dynamic(() => import("./NavAuth"), { ssr: false });

const NavBar = () => {
    const { state, dispatch } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios
            .get("/categories")
            .then((res) => setCategories(res.data.data.categories))
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    }, []);

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
        e.preventDefault();
    };

    const handleSearchSubmit = (e) => {
        router.push({
            pathname: "/room/search",
            query: { term: searchTerm },
        });
        e.preventDefault();
    };

    return (
        <div>
            <div className="fixed w-full z-40">
                {state.user ? (
                    <NavAuth
                        categories={categories}
                        user={state.user}
                        handleSearchInputChange={handleSearchInputChange}
                        handleSearchSubmit={handleSearchSubmit}
                    />
                ) : (
                    <NavNonAuth
                        categories={categories}
                        handleSearchInputChange={handleSearchInputChange}
                        handleSearchSubmit={handleSearchSubmit}
                    />
                )}
            </div>
        </div>
    );
};

export default NavBar;
