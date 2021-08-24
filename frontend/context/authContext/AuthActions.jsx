export const authenStart = () => ({
    type: "AUTHEN_START",
});
export const authenSuccess = (data) => ({
    type: "AUTHEN_SUCCESS",
    payload: data,
});
export const authenFailure = (error) => ({
    type: "AUTHEN_FAILURE",
    payload: error,
});
export const getMeStart = () => ({
    type: "GETME_START",
});
export const getMeSuccess = (data) => ({
    type: "GETME_SUCCESS",
    payload: data,
});
export const getMeFailure = (error) => ({
    type: "GETME_FAILURE",
    payload: error,
});
export const logout = () => ({
    type: "LOGOUT",
});
