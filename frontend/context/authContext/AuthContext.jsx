import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";
import { logout } from "./AuthActions";
import { useRouter } from "next/router";
export const AuthContext = createContext();

const removeLocalStorage = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("expiredAt");
    }
};

export const AuthContextProvider = ({ children }) => {
    const getExpireAt = () => {
        let expiredAt;
        if (typeof window !== "undefined") {
            expiredAt = JSON.parse(localStorage.getItem("expiredAt"));
        }
        return expiredAt;
    };
    const expiredAt = getExpireAt();
    // Get accessToken from local Storage. (NOTE: check window type to fix bug localStorage undefined in NextJS)

    const getAccessToken = () => {
        let accessToken = null;
        if (typeof window !== "undefined") {
            accessToken = localStorage.getItem("accessToken") ?? null;
        }
        return accessToken;
    };
    const token = getAccessToken();

    // Get user from local Storage. (NOTE: check window type to fix bug localStorage undefined in NextJS)
    const getUser = () => {
        let user = null;
        if (typeof window !== "undefined") {
            user = JSON.parse(localStorage.getItem("user")) ?? null;
        }
        return user;
    };
    const user = getUser();

    const INITIAL_STATE = {
        user: user,
        token: token,
        isFetching: false,
        error: null,
    };
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    const router = useRouter();
    useEffect(() => {
        const checkExpire = () => {
            if (expiredAt) {
                let remainingTime = expiredAt - Date.now();
                // Token not expired
                if (remainingTime > 0) {
                    let id = setTimeout(() => {
                        dispatch(logout());
                        removeLocalStorage();
                        alert("Session expired. Please login again !!!");
                        clearInterval(id);
                        router.push("/");
                    }, remainingTime);
                    return;
                }
            }
            dispatch(logout());
            removeLocalStorage();
        };
        checkExpire();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
