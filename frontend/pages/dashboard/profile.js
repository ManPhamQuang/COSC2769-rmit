import React, { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { AuthContextProvider } from "../../context/authContext/AuthContext";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import ImageUpload from "../../components/ImageUpload";
import { getMe } from "../../context/authContext/apiCalls";

const Breaker = () => (
    <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
            <div className="border-t border-gray-200" />
        </div>
    </div>
);
export default function Profile() {
    const { state, dispatch } = useContext(AuthContext);
    const [name, setName] = useState(state.user.name);
    const [isLoading, setIsLoading] = useState(false);
    const [description, setDescription] = useState(
        state.user.description || ""
    );
    const [image, setImage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        let avatar;
        if (image) {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "iiyg1094");
            try {
                const response = await axios.post(
                    "https://api.cloudinary.com/v1_1/dybygufkr/image/upload",
                    formData
                );
                avatar = response.data.secure_url;
            } catch (error) {
                alert("error.message");
            }
        }
        const body = {
            name: name,
            description: description,
        };
        if (avatar) body.avatar = avatar;
        try {
            const response = await axios.patch(
                "http://localhost:5000/api/v1/users/updateMe",
                body,
                { headers: { Authorization: "Bearer " + state.token } }
            );
            if (`${response.status}`.startsWith("2")) {
                console.log("ENTERING");
                getMe(state.token, dispatch);
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            alert(error.message);
        }
    };

    return (
        <div className="p-5 lg:p-10">
            <div>
                <div className="">
                    <div className="">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Profile
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                            This information will be displayed publicly so be
                            careful what you share.
                        </p>
                    </div>
                    <div className="mt-5">
                        <form>
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 lg:col-span-1">
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Name
                                            </label>
                                            <input
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-3 lg:col-span-2">
                                            <label
                                                htmlFor="email-address"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Email address
                                            </label>
                                            <input
                                                value={state.user.email}
                                                disabled
                                                type="text"
                                                name="email-address"
                                                id="email-address"
                                                autoComplete="email"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 disabled:text-gray-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Photo
                                        </label>
                                        <ImageUpload
                                            image={image}
                                            setImage={setImage}
                                            currentAvatar={state.user.avatar}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="description"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Description
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="description"
                                                name="description"
                                                rows={3}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                placeholder="description"
                                                value={description}
                                                onChange={(e) =>
                                                    setDescription(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Brief description for your profile.
                                        </p>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    {isLoading ? (
                                        <button
                                            disabled={true}
                                            onClick={handleSubmit}
                                            type="submit"
                                            className="inline-flex w-28 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Saving...
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleSubmit}
                                            type="submit"
                                            className="inline-flex w-28 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Save
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Breaker />
        </div>
    );
}
