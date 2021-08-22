import React from "react";
import { useState, useReducer, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../context/authContext/AuthContext";
import CategoryDropDown from "./CategoryDropDown";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import router from "next/router";
import { StarIcon } from "@heroicons/react/solid";

const roomReducer = (state, action) => {
    switch (action.type) {
        case "ROOM_INIT":
            return {
                ...state,
                isLoading: false,
                error: null,
            };
        case "ROOM_LOADING":
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case "ROOM_CREATE_SUCCESS":
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: null,
            };
        case "ROOM_CREATE_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            throw new Error();
    }
};

export default function UpdateForm({ roomDetail }) {
    const { state, dispatch } = useContext(AuthContext);
    const INIT_CATEGORY = [{ name: roomDetail.category.name }];
    const [files, setFiles] = useState([]);
    const [errors, setErrors] = useState("");

    // State to display dropdown options for categories
    const [categories, setCategories] = useState(INIT_CATEGORY);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    // State to prepare data for server request
    const [categoryID, setCategoryID] = useState(roomDetail.category._id);
    const [title, setTitle] = useState(roomDetail.title);
    const [description, setDescription] = useState(roomDetail.description);
    const [price, setPrice] = useState(roomDetail.price);
    const [startDate, setStartDate] = useState(new Date());
    const [display, setDisplay] = useState("");

    const isInvalid =
        title === "" || description === "" || price === "" || categoryID === "";

    const [room, dispatchRoom] = useReducer(roomReducer, {
        data: {},
        isLoading: false,
        error: null,
    });

    const getAccessToken = () => {
        let accessToken = null;
        if (typeof window !== "undefined") {
            accessToken = localStorage.getItem("accessToken") ?? null;
        }
        return accessToken;
    };
    const categoryDropdownOnChange = (category) => {
        setCategoryID(category._id);
        setSelectedCategory(category);
    };

    useEffect(() => {
        // Navigate user to Login page if can not find token
        if (!state.token) {
            router.push("/login");
        }

        // Fetch all available categories
        axios
            .get("http://localhost:5000/api/v1/categories", {
                headers: { Authorization: `Bearer ${state.token}` },
            })
            .then((response) => {
                setCategories(response.data.data.categories);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        maxSize: "10485760",
        maxFiles: 1,
        multiple: false,
        onDrop: (acceptedFiles, fileRejections) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
            fileRejections.forEach((file) => {
                file.errors.forEach((err) => {
                    if (err.code === "file-too-large") {
                        setErrors("Error: File must not exceed 10MB limit!");
                    }

                    if (err.code === "file-invalid-type") {
                        setErrors("Error: File must be an image!");
                    }
                });
            });
        },
    });

    const thumbs = files.map((file) => (
        <div key={file.name}>
            <div className="h-36 w-full group-hover:bg-gray-50 group-hover:border-gray-50 rounded-md">
                <img
                    src={file.preview}
                    className="object-cover border-gray-300 border rounded-md h-full w-full group-hover:mix-blend-multiply"
                />
            </div>
        </div>
    ));

    useEffect(
        () => () => {
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach((file) => URL.revokeObjectURL(file.preview));
        },
        [files]
    );

    const handleUpdate = async (event) => {
        event.preventDefault();
        const token = getAccessToken();
        let thumbnail;
        dispatchRoom({ type: "ROOM_LOADING" });
        if (files.length == 1) {
            const formData = new FormData();
            formData.append("file", files[0]);
            formData.append("upload_preset", "iiyg1094");
            try {
                const response = await axios.post(
                    "https://api.cloudinary.com/v1_1/dybygufkr/image/upload",
                    formData
                );
                thumbnail = response.data.secure_url;
            } catch (error) {
                console.log(error);
            }
        }
        let data = {
            thumbnail: thumbnail,
            title: title,
            description: description,
            price: price,
            category: categoryID,
            startedAt: startDate,
        };
        axios
            .patch(
                `http://localhost:5000/api/v1/rooms/${roomDetail._id}`,
                data,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            )
            .then((response) => {
                dispatchRoom({
                    type: "ROOM_CREATE_SUCCESS",
                    payload: response.data.data.room,
                });
                router.push("/dashboard");
            })
            .catch((error) => {
                dispatchRoom({
                    type: "ROOM_CREATE_FAILURE",
                    payload: error.response.data,
                });
            });
    };

    return (
        <div>
            {room.isLoading && (
                <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <h2 className="text-center text-white text-xl font-semibold">
                        Loading...
                    </h2>
                    <p className="w-1/3 text-center text-white">
                        This may take a few seconds, please don't close this
                        page.
                    </p>
                </div>
            )}
            <div className="md:grid md:grid-cols-3 md:gap-6 mt-32">
                <div className="col-span-3 lg:col-span-1 space-y-">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Update Chatroom
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                            This information will be displayed publicly so be
                            careful what you share.
                        </p>
                    </div>
                    <div className="mt-4 px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Preview
                        </h3>
                        <div className="group cursor-pointer px-16 mt-4">
                            <div className="border px-8 py-2">
                                {files.length > 0 && <div>{thumbs}</div>}
                                {files.length == 0 && (
                                    <div className="h-36 w-full group-hover:bg-gray-50 group-hover:border-gray-50 rounded-md">
                                        <img
                                            src={"/default.png"}
                                            className="object-cover border-gray-300 border rounded-md h-full w-full group-hover:mix-blend-multiply"
                                        />
                                    </div>
                                )}

                                <div className="leading-snug mt-2">
                                    <h1 className="font-bold">{title}</h1>
                                    <p className="text-sm font-normal text-gray-500 truncate">
                                        {roomDetail.createdBy.name}
                                    </p>
                                    <p className="text-yellow-700 font-semibold inline">
                                        4.7
                                    </p>
                                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                                    <StarIcon className="h-4 w-4 text-yellow-500 inline mb-1" />
                                    <p className="inline text-sm font-normal text-gray-500">
                                        (630,406)
                                    </p>
                                    <h1 className="font-bold">${price}</h1>
                                    <div className="py-1 px-2 bg-yellow-200 inline-block rounded-sm">
                                        <p className="text-xs font-semibold mx-auto text-center">
                                            {selectedCategory.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 col-span-3 lg:col-span-2">
                    <form onSubmit={handleUpdate}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-4 sm:p-6">
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-2">
                                        <div className="flex items-center justify-center">
                                            <div className="w-full mx-auto z-10">
                                                <CategoryDropDown
                                                    categories={categories}
                                                    selectedCategory={
                                                        selectedCategory
                                                    }
                                                    categoryDropdownOnChange={
                                                        categoryDropdownOnChange
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Price
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">
                                                    $
                                                </span>
                                            </div>
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={price}
                                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                                placeholder="0.00"
                                                onChange={(e) =>
                                                    setPrice(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        autoComplete="email"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        value={title}
                                    />
                                </div>
                                <div className="my-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            rows="5"
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            placeholder="Description about this chatroom"
                                            value={description}
                                            onChange={(e) =>
                                                setDescription(e.target.value)
                                            }
                                        ></textarea>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Brief description for your chatroom.
                                        URLs are hyperlinked.
                                    </p>
                                </div>
                                <div className="my-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Thumbnail
                                    </label>
                                    <div className="mt-1 flex justify-center px-4 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-4 text-center">
                                            <div
                                                {...getRootProps({
                                                    className: "dropzone",
                                                })}
                                            >
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <input {...getInputProps()} />
                                                <p className="text-xs text-gray-500">
                                                    PNG, JPG, GIF up to 10MB
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    Click to select image or
                                                    drag an image in.
                                                </p>
                                                <p className="font-bold text-1xl text-red-500">
                                                    {errors}
                                                </p>
                                            </div>
                                            <div>
                                                {thumbs}
                                                <button
                                                    type="button"
                                                    className="justify-center mt-4 py-2 px-4 bg-red-600 text-white active:bg-red-700 text-sm font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                    onClick={() => setFiles([])}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4 gap-6">
                                    <div className="col-span-4 lg:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Started date
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) =>
                                                    setStartDate(date)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    className="inline-flex justify-center py-2 px-4 bg-indigo-600 text-white active:bg-indigo-700 text-sm font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 disabled:bg-indigo-200 disabled:cursor-not-allowed"
                                    type="submit"
                                    disabled={isInvalid}
                                >
                                    Update Room
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
