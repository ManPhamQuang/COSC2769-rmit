import axios from "axios";
import { authenStart, authenSuccess, authenFailure } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(authenStart());
  try {
    const res = await axios.post("http://localhost:5000/api/v1/users/login", user);
    dispatch(authenSuccess(res.data));
    localStorage.setItem("accessToken", res.data.data.token);
  } catch (err) {
    dispatch(authenFailure(err.response.data.message));
  }
};

export const signup = async (user, dispatch) => {
  dispatch(authenStart());
  try {
    const res = await axios.post("http://localhost:5000/api/v1/users/signup", user);
    dispatch(authenSuccess(res.data));
    localStorage.setItem("accessToken", res.data.data.token);
  } catch (err) {
    dispatch(authenFailure(err.response.data.message));
  }
};