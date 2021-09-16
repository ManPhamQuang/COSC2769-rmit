import axios from "../../components/axios";
import {
    authenStart,
    authenSuccess,
    authenFailure,
    getMeStart,
    getMeSuccess,
    getMeFailure,
    logout,
    resetStart,
    resetSuccess,
    resetFailure,
} from "./AuthActions";
import router from "next/router";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const saveLocalStorageAndSetTimeOut = (responseData, dispatch) => {
    const { user, token } = responseData;
    const { exp } = jwt_decode(token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", token);
    // Convert to milliseconds to compare Date.now()
    localStorage.setItem("expiredAt", exp * 1000);
    let id = setTimeout(() => {
        dispatch(logout());
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("expiredAt");
        // alert("Session expired. Please login again !!!");
        toast.error("Session expired. Please login again !!!", {
            position: toast.POSITION.TOP_RIGHT,
        });
        clearInterval(id);
        router.push("/");
    }, exp * 1000 - Date.now());
};

export const login = async (userCredentials, dispatch) => {
    dispatch(authenStart());
    try {
        const res = await axios.post("/users/login", userCredentials);
        dispatch(authenSuccess(res.data.data));
        saveLocalStorageAndSetTimeOut(res.data.data, dispatch);
        router.push("/");
    } catch (err) {
        dispatch(authenFailure(err.response.data.message));
    }
};

export const getMe = async (token, dispatch) => {
    // dispatch(getMeStart());
    dispatch(getMeStart());
    try {
        const res = await axios.get("/users/getMe", {
            headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(getMeSuccess(res.data.data));
        localStorage.setItem("user", JSON.stringify(res.data.data));
    } catch (err) {
        dispatch(getMeFailure(err.response.data.message));
    }
};

export const signup = async (userCredentials, dispatch) => {
    dispatch(authenStart());
    try {
        const res = await axios.post("/users/signup", userCredentials);
        dispatch(authenSuccess(res.data.data));
        saveLocalStorageAndSetTimeOut(res.data.data, dispatch);
        router.push("/");
    } catch (err) {
        dispatch(authenFailure(err.response.data.message));
    }
};

export const loginWithGoogle = async (userCredentials, dispatch) => {
    dispatch(authenStart());
    try {
        const res = await axios.post("/users/loginWithGoogle", userCredentials);
        dispatch(authenSuccess(res.data.data));
        saveLocalStorageAndSetTimeOut(res.data.data, dispatch);
        router.push("/");
    } catch (err) {
        dispatch(authenFailure(err.response.data.message));
    }
};

export const forgotPass = async (userCredentials, dispatch) => {
    dispatch(resetStart());
    try {
        const res = await axios.post(
            "/users/request-reset-password",
            userCredentials
        );
        dispatch(resetSuccess());
        toast.success(
            "We've sent an email allowing you to reset your password.",
            {
                position: toast.POSITION.TOP_RIGHT,
            }
        );
    } catch (err) {
        dispatch(resetFailure(err.response.data.message));
    }
};

export const resetPass = async (userCredentials, dispatch) => {
    dispatch(resetStart());
    try {
        const res = await axios.post("/users/reset-password", userCredentials);
        dispatch(resetSuccess());
        toast.success(
            "Your password has been reset successfully. Log in again to start joining chatrooms.",
            {
                position: toast.POSITION.TOP_RIGHT,
            }
        );
        router.push("/login");
    } catch (err) {
        dispatch(resetFailure(err.response.data.message));
        toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};
