const AuthReducer = (state, action) => {
  switch (action.type) {
    case "AUTHEN_START":
      return {
        user: null,
        token: null,
        isFetching: true,
        error: null,
      };
    case "AUTHEN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        isFetching: false,
        error: null,
      };
    case "AUTHEN_FAILURE":
      return {
        user: null,
        token: null,
        isFetching: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        token: null,
        isFetching: false,
        error: false,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
