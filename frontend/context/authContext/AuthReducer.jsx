const AuthReducer = (state, action) => {
  switch (action.type) {
    case "AUTHEN_START":
      return {
        user: null,
        isFetching: true,
        error: null,
      };
    case "AUTHEN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: null,
      };
    case "AUTHEN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
