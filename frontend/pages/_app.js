import "tailwindcss/tailwind.css";
import "./index.css";
import { AuthContextProvider } from "../context/authContext/AuthContext";

function MyApp({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <Component {...pageProps} />
        </AuthContextProvider>
    );
}

export default MyApp;
