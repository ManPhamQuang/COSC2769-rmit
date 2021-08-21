import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";
import router from "next/router";

const UserDropdown = ({ user }) => {
    const { state, dispatch } = useContext(AuthContext);

    const handleLogout = (e) => {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        dispatch(logout());
        router.push("/login");
        e.preventDefault();
    };

    return (
        <>
            <Menu as="div" className="relative inline-block text-left mr-3">
                <div>
                    <Menu.Button className="inline-flex justify-center items-center w-full px-4 py-2 text-base font-medium text-gray-800">
                        <span className="mr-2 text-base hidden md:inline-flex">
                            Hi {user.name}!
                        </span>
                        <img
                            src={user.avatar}
                            className="h-8 w-8 rounded-full"
                        />
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                clipRule="evenodd"
                            />
                        </svg> */}
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-56 h-50 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  overflow-y-auto">
                        <div className="mt-4 mb-2 px-4 py-1 flex flex-col justify-center items-center truncate cursor-default">
                            <img
                                className="h-14 w-14 rounded-full border border-gray-200 "
                                src={user.avatar}
                                alt=""
                            />
                            <span className="mt-2 text-base">{user.name}</span>
                            <span className="my-1 text-xs text-gray-400">
                                {user.email}
                            </span>
                        </div>
                        <div className="text-left">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => {
                                            if (state.user.role === "expert") {
                                                router.push(
                                                    "/dashboard/profile"
                                                );
                                            } else {
                                                router.push("/edit-profile");
                                            }
                                        }}
                                        className={`${
                                            active
                                                ? "text-indigo-600 bg-gray-100"
                                                : "text-gray-900"
                                        } block px-4 py-2 text-sm text-gray-700 w-full`}
                                    >
                                        Edit Profile
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={handleLogout}
                                        className={`${
                                            active
                                                ? "text-indigo-600 bg-gray-100"
                                                : "text-gray-900"
                                        } block px-4 py-2 text-sm text-gray-700 w-full`}
                                    >
                                        Log out
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
};

export default UserDropdown;
