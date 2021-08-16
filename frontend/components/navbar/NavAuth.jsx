import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import NavCategory from "./NavCategory";
import Link from "next/link";
import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavAuth({ categories, user }) {
  return (
    <Disclosure as="nav" className="bg-white z-20 shadow-md relative">
      {({ open }) => (
        <>
          <div className="w-full py-2 mx-auto px-2 sm:px-6 lg:px-10">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center lg:w-1/5">
                  <Link href="/">
                    <img
                      className="block lg:hidden h-8 w-auto cursor-pointer"
                      src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                      alt=""
                    />
                  </Link>
                  <Link href="/">
                    <img
                      className="hidden lg:block h-8 w-auto cursor-pointer"
                      src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                      alt=""
                    />
                  </Link>
                  <div className="hidden sm:block sm:ml-6 relative">
                    <NavCategory categories={categories} />
                  </div>
                </div>
              </div>
              <div className="flex-shrink items-center hidden md:justify-start md:flex md:w-2/5 lg:w-3/5 px-2">
                <SearchBar />
              </div>
              <div className="absolute inset-y-0 right-0 flex flex-shrink-0 items-center pr-2 sm:static sm:inset-auto sm:pr-0 lg:w-1/5 lg:justify-end">
                <UserDropdown user={user}/>  
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden divide-y divide-gray-100">
            <div className="px-2 pb-2 space-y-1">
              <div className="mx-2 bg-white rounded-md border-none border-gray-600 px-2 py-1 flex items-center text-gray-400 focus-within:text-gray-600 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  name="search"
                  // onChange={handleSearch}
                  className="ml-0 w-full bg-white  border-none focus:ring-0"
                  placeholder="Search for anything"
                />
              </div>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <h1 className="px-3 py-2 font-medium">CATEGORIES</h1>
              {categories.map((item) => (
                <a
                  key={item.name}
                  // href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-white text-gray-800"
                      : "text-gray-800 hover:bg-gray-100 hover:text-indigo-600 cursor-pointer",
                    "block px-3 py-2 rounded-md text-sm font-normal"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
