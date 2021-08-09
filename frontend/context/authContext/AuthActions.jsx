export const authenStart = () => ({
  type : "AUTHEN_START"
})
export const authenSuccess = (data) => ({
  type : "AUTHEN_SUCCESS",
  payload : data
})
export const authenFailure = (error) => ({
  type : "AUTHEN_FAILURE",
  payload : error
})

export const logout = () => ({
  type: "LOGOUT",
});