import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { authenSuccess } from "./AuthActions";

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        // localStorage.setItem("accessToken", state.user);
        let token = localStorage.getItem("accessToken");
        if (token) {
            axios
                .get("http://localhost:5000/api/v1/users/getMe", {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    dispatch(authenSuccess(res.data.data));
                })
                .catch((err) => console.log(err));
        }
    }, [state.user]);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
