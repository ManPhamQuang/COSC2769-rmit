export const authenStart = () => ({
  type : "AUTHEN_START"
})
export const authenSuccess = (user) => ({
  type : "AUTHEN_SUCCESS",
  payload : user
})
export const authenFailure = (error) => ({
  type : "AUTHEN_FAILURE",
  payload : error
})