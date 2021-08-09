import React from "react";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import Link from "next/link";

import NavCategory from "./NavCategory";
import SearchBar from "./SearchBar";

const MainNavBar = () => {
  const { state, dispatch } = useContext(AuthContext);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/categories")
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  console.log(state.user);
  console.log(state.token);
  return (
    <div className="bg-white h-20 py-2 px-12 flex justify-between items-center text-base fixed w-full z-20 shadow-md">
      <div className="flex items-center font-medium text-indigo-900 relative">
        <Link href="/">
          <img
            className="h-6 mr-8 cursor-pointer"
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt=""
          />
        </Link>
        <NavCategory categories={categories} />
      </div>
      <div className=" flex items-center">
        <SearchBar />
      </div>
      <div className=" flex items-center ">
        <Link href="/login">
          <button className="bg-white text-black border border-black py-2 px-4 mr-3 cursor-pointer">
            Log in
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-black text-white border border-black py-2 px-4 cursor-pointer">
            Sign up
          </button>
        </Link>
        {/* {token && (
          <h1>{token}</h1>
        )} */}
      </div>
    </div>
  );
};

export default MainNavBar;
