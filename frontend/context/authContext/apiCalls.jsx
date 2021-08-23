import axios from "axios";
import { authenStart, authenSuccess, authenFailure } from "./AuthActions";
import router from "next/router";

export const login = async (userCredentials, dispatch) => {
  dispatch(authenStart());
  try {
    const res = await axios.post("http://localhost:5000/api/v1/users/login", userCredentials);
    console.log(res.data.data);
    dispatch(authenSuccess(res.data.data));
    localStorage.setItem("user", JSON.stringify(res.data.data.user));
    localStorage.setItem("accessToken", res.data.data.token);
    router.push("/");
  } catch (err) {
    dispatch(authenFailure(err.response.data.message));
  }
};

export const signup = async (userCredentials, dispatch) => {
  dispatch(authenStart());
  try {
    const res = await axios.post("http://localhost:5000/api/v1/users/signup", userCredentials);
    console.log(res.data.data);
    dispatch(authenSuccess(res.data.data));
    localStorage.setItem("user", JSON.stringify(res.data.data.user));
    localStorage.setItem("accessToken", res.data.data.token);
    router.push("/");
  } catch (err) {
    dispatch(authenFailure(err.response.data.message));
  }
};