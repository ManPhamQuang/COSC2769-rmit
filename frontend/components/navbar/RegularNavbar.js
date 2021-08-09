import React from "react";
import Link from "next/link";
import NavCategory from "./NavCategory";
import SearchBar from "./SearchBar";

const RegularNavbar = ({categories}) => {
  return (
    <div className="bg-white h-20 py-2 px-12 flex justify-between items-center text-base fixed w-full z-20 shadow-md">
      <div className="flex items-center font-medium text-indigo-900 relative w-1/5">
        <Link href="/">
          <img
            className="h-6 mr-8 cursor-pointer"
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt=""
          />
        </Link>
        <NavCategory categories={categories} />
      </div>
      <div className=" flex items-center w-3/5">
        <SearchBar />
      </div>
      <div className=" flex justify-end items-center w-1/5">
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
      </div>
    </div>
  );
}

export default RegularNavbar;