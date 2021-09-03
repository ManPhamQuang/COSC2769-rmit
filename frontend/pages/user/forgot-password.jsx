import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/authContext/AuthContext";
import { forgotPass } from "../../context/authContext/apiCalls";

const forgotPassword = () => {
    const { state, dispatch } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const isInvalid = email === "";

    const handleForgotSubmit = (e) => {
      forgotPass(dispatch);
      // toast.success("We've sent an email allowing you to reset your password.", {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      // });
      toast.error(state.error, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      console.log(state);
      e.preventDefault();
    };

    return (
        <div>
            <div className="container mx-auto p-4 h-full">
                <div className="flex content-center items-center justify-center h-full mt-20">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-indigo-50 border-0 ">
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-center my-6">
                                    <h6 className="text-indigo-600 text-xl font-bold ">
                                        Forgot password
                                    </h6>
                                </div>
                                <form onSubmit={handleForgotSubmit}>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                            placeholder="madmax@example.com"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="text-center mt-6 w-full">
                                        {state.isLoading ? (
                                            <button
                                                type="button"
                                                className="inline-flex justify-center items-center w-full mb-1 uppercase px-6 py-3 border border-transparent text-sm font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 disabled:cursor-not-allowed"
                                                disabled
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
                                                Processing
                                            </button>
                                        ) : (
                                            <button
                                                className="bg-indigo-600 text-white active:bg-indigo-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full disabled:bg-indigo-200 disabled:cursor-not-allowed"
                                                type="submit"
                                                disabled={isInvalid}
                                            >
                                                Reset Password
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6">
                            <div className="w-full text-center">
                                <small>
                                    <Link href="/login">
                                        <a className="text-indigo-400 hover:text-indigo-600">
                                            Log in with another email?
                                        </a>
                                    </Link>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default forgotPassword;
