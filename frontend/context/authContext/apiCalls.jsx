import axios from "../../components/axios";
import {
    authenStart,
    authenSuccess,
    authenFailure,
    getMeStart,
    getMeSuccess,
    getMeFailure,
    logout,
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
    console.log(exp * 1000 - Date.now());
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
        console.log(res.data.data);
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
        console.log(res.data.data);
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
        console.log(res.data.data);
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
        console.log(res.data.data);
        dispatch(authenSuccess(res.data.data));
        saveLocalStorageAndSetTimeOut(res.data.data, dispatch);
        router.push("/");
    } catch (err) {
        dispatch(authenFailure(err.response.data.message));
    }
};
