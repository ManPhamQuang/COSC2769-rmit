import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { signup } from "../context/authContext/apiCalls";
import router from "next/router";
import { AuthContext } from "../context/authContext/AuthContext";
import LoginGoogle from "../components/LoginGoogle";
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [role, setRole] = useState("user");

    const { state, dispatch } = useContext(AuthContext);

    const isInvalid =
        name === "" ||
        email === "" ||
        password === "" ||
        passwordConfirm === "";

    const handleRoleChange = (e) => {
        e.target.checked ? setRole("expert") : setRole("user");
    };

    const handleRegister = (e) => {
        signup({ name, email, password, passwordConfirm, role }, dispatch);
        e.preventDefault();
    };

    useEffect(() => {
        // Navigate user to Homepage if find token
        if (state.token) {
            router.push("/");
        }
    }, []);

    return (
        <div>
            <div className="container mx-auto p-4 h-full">
                <div className="flex content-center items-center justify-center h-full mt-10">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-indigo-50 border-0 ">
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-center my-6">
                                    <h6 className="text-indigo-600 text-xl font-bold">
                                        Sign up with credentials
                                    </h6>
                                </div>
                                <form onSubmit={handleRegister}>
                                    <div className="relative w-full mb-3 ">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                            placeholder="Max"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
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
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                            placeholder="*******"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                                            Password Confirm
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                            placeholder="*******"
                                            onChange={(e) =>
                                                setPasswordConfirm(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="instructorCheck"
                                                type="checkbox"
                                                className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                                                onChange={handleRoleChange}
                                            />
                                            <span className="ml-2 text-sm font-semibold text-gray-700">
                                                Become an instructor
                                            </span>
                                        </label>
                                    </div>
                                    <div className="text-center mt-6">
                                        {state.isFetching ? (
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
                                                Sign up
                                            </button>
                                        )}
                                    </div>
                                    {state.error && (
                                        <div className="text-red-500 text-sm mt-2">
                                            {state.error}
                                        </div>
                                    )}
                                </form>
                            </div>
                            <div className="rounded-t mb-0 px-10 pb-6">
                                <hr className="mb-6 border-b-1 border-gray-400 w-4/5 mx-auto" />
                                <div className="text-gray-500 text-center mb-3 font-bold">
                                    <small>Or login with</small>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <LoginGoogle />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6">
                            <div className="w-full text-center">
                                <small>
                                    <Link href="/user/forgot-password">
                                        <a className="text-indigo-400 hover:text-indigo-600">
                                            Forgot your password?
                                        </a>
                                    </Link>
                                </small>
                            </div>
                            <div className="mt-4 w-full text-center">
                                <small>
                                    <Link href="/signup">
                                        <a className="text-gray-400 hover:text-gray-600">
                                            Have not registered any account?
                                            Sign up instead{" "}
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

export default Signup;
