import { useState, useReducer, useEffect, useRef } from "react";
import axios from "axios";
import router from "next/router";
import CategoryDropDown from "../../components/CategoryDropDown";

const INIT_CATEGORY = [
  { name: "Web Development" },
  { name: "Data Science" },
  { name: "Mobile Development" },
  { name: "Game Development" },
  { name: "Software Testing" },
  { name: "No-Code Development" },
  { name: "iOS Development" },
  { name: "Android Development" },
];

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

const data = {
  title: "Room01",
  description: "Room 01 Description",
  price: 20,
  endedAt: 1626124601736,
  createdBy: "60f597fa4ef1fd0860d57a3b",
  url: "url1",
  videoUrl: "url2",
};

const Create = () => {
  // State to display dropdown options for categories
  const [categories, setCategories] = useState(INIT_CATEGORY);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // State to prepare data for server request
  const [categoryID, setCategoryID] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [thumbnail, setThumbnail] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  // Reducer for handling state when creating room
  const [room, dispatchRoom] = useReducer(roomReducer, {
    data: {},
    isLoading: false,
    error: null,
  });

  let accessToken = null;

  useEffect(() => {
    // Fix bug localStorage undefined in NextJS
    if (typeof window !== "undefined") {
      accessToken = localStorage.getItem("accessToken") ?? null;
    }

    if (!accessToken) {
      router.push("/signup");
    }

    // Fetch all available categories
    axios
      .get("http://localhost:5000/api/v1/categories", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setCategories(response.data.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCreateButtonClick = (event) => {
    // dispatchRoom({ type: "ROOM_LOADING" });
    // axios
    //   .post("http://localhost:5000/api/v1/rooms", data, {
    //     headers: { Authorization: `Bearer ${accessToken}` },
    //   })
    //   .then((response) => {
    //     dispatchRoom({
    //       type: "ROOM_CREATE_SUCCESS",
    //       payload: response.data.data.room,
    //     });
    //   })
    //   .catch((error) => {
    //     dispatchRoom({
    //       type: "ROOM_CREATE_FAILURE",
    //       payload: error.response.data,
    //     });
    //   });
    console.log(selectedCategory.name)
    console.log(categoryID);
    event.preventDefault();
  };

  const categoryDropdownOnChange = (category) => {
    setCategoryID(category._id);
    setSelectedCategory(category);
  };

  return (
    <div className="container mt-20 mx-auto px-4 h-full">
      {room.error && (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">Error!</b> {room.error.message}
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => {
              dispatchRoom({ type: "ROOM_INIT" });
            }}
          >
            <span>×</span>
          </button>
        </div>
      )}
      {room.isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          <h2 className="text-center text-white text-xl font-semibold">
            Loading...
          </h2>
          <p className="w-1/3 text-center text-white">
            This may take a few seconds, please don't close this page.
          </p>
        </div>
      )}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="col-span-3 lg:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Create New Chatroom
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 col-span-3 lg:col-span-2">
          <form>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-1">
                    <div className="flex items-center justify-center ">
                      <div className="w-full mx-auto">
                        <CategoryDropDown
                          categories={categories}
                          selectedCategory={selectedCategory}
                          categoryDropdownOnChange={categoryDropdownOnChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2"></div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    autoComplete="email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      rows="3"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Description about this chatroom"
                    ></textarea>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Brief description for your chatroom. URLs are hyperlinked.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Price
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="text"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Thumbnail
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
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
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleCreateButtonClick}
                >
                  Create Room
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
