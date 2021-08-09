import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
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
