import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { loginWithGoogle } from "../context/authContext/apiCalls";
import { AuthContext } from "../context/authContext/AuthContext";
const LoginGoogle = () => {
    const { state, dispatch } = useContext(AuthContext);

    const handleLoginWithGoogle = (e) => {
        console.log(e);
        const data = { id: e.tokenId };
        loginWithGoogle(data, dispatch);
    };

    return (
        <GoogleLogin
            clientId="915245288817-fs8mue21l1fvknhmr2nd6l52qnf21580.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={handleLoginWithGoogle}
            cookiePolicy={"single_host_origin"}
            disabled={state.isFetching}
            render={(renderProps) => (
                <button
                    className="bg-white active:bg-gray-100 text-gray-800 font-normal py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs w-full justify-center"
                    type="button"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                >
                    <img
                        alt="Google icon"
                        className="w-5 mr-1"
                        src="/google-icon.svg"
                    />
                    Google
                </button>
            )}
        />
    );
};

export default LoginGoogle;
