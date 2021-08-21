import React, { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { AuthContextProvider } from "../../context/authContext/AuthContext";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import ImageUpload from "../../components/ImageUpload";

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
                setIsLoading(false);
                // const data = {};
                // data.user = response.data.data.user;
                // auth.login("update", data);
                // setTimeout(() =>
                //     enqueueSnackbar("Successfully update your profile", {
                //         variant: "success",
                //         anchorOrigin: {
                //             vertical: "bottom",
                //             horizontal: "left",
                //         },
                //         autoHideDuration: 4000,
                //     })
                // );
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
                                        {/* <div className="col-span-3 sm:col-span-2">
                                            <label
                                                htmlFor="company-website"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Website
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                    http://
                                                </span>
                                                <input
                                                    type="text"
                                                    name="company-website"
                                                    id="company-website"
                                                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                    placeholder="www.example.com"
                                                />
                                            </div>
                                        </div> */}
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
                                        {/* <div className="mt-1 flex items-center">
                                            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                <svg
                                                    className="h-full w-full text-gray-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg>
                                            </span>
                                            <button
                                                type="file"
                                                id="avatar"
                                                name="avatar"
                                                accept="image/png, image/jpeg"
                                                className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Change
                                            </button>
                                        </div> */}
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

                                    {/* <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="country"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Country / Region
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country"
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6">
                                            <label
                                                htmlFor="street-address"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Street address
                                            </label>
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label
                                                htmlFor="city"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label
                                                htmlFor="state"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                State / Province
                                            </label>
                                            <input
                                                type="text"
                                                name="state"
                                                id="state"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label
                                                htmlFor="postal-code"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                ZIP / Postal
                                            </label>
                                            <input
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div> */}
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
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

Profile.getLayout = (page) => (
    <AuthContextProvider>
        <DashboardLayout>{page}</DashboardLayout>
    </AuthContextProvider>
);
