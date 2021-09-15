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
        case "GETME_START":
            return {
                ...state,
                isFetching: true,
            };
        case "GETME_SUCCESS":
            return {
                ...state,
                user: action.payload,
                isFetching: false,
            };
        case "GETME_FAILURE":
            return {
                ...state,
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
        case "RESET_START":
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                resetError: false
            };
        case "RESET_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                resetError: false
            };
        case "RESET_FAILURE":
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                resetError: action.payload,
            };
        default:
            return { ...state };
    }
};

export default AuthReducer;
