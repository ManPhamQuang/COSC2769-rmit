import axios from "../../components/axios";
import {
    authenStart,
    authenSuccess,
    authenFailure,
    getMeStart,
    getMeSuccess,
    getMeFailure,
} from "./AuthActions";
import router from "next/router";

export const login = async (userCredentials, dispatch) => {
    dispatch(authenStart());
    try {
        const res = await axios.post("/users/login", userCredentials);
        console.log(res.data.data);
        dispatch(authenSuccess(res.data.data));
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        localStorage.setItem("accessToken", res.data.data.token);
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
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        localStorage.setItem("accessToken", res.data.data.token);
        router.push("/");
    } catch (err) {
        dispatch(authenFailure(err.response.data.message));
    }
};
