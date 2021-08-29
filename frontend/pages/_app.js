import "tailwindcss/tailwind.css";
import { AuthContextProvider } from "../context/authContext/AuthContext";
import "./index.css";
import { useRouter } from "next/router";
import DefaultLayout from "../components/Layout";
import DashboardLayout from "../components/DashboardLayout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
    const { pathname } = useRouter();
    const isDashboard = pathname.includes("/dashboard");

    const LayoutWrapper = ({ children }) =>
        isDashboard ? (
            <DashboardLayout>{children}</DashboardLayout>
        ) : (
            <DefaultLayout>{children}</DefaultLayout>
        );

    return (
        <AuthContextProvider>
            <LayoutWrapper>
                <Component {...pageProps} />
            </LayoutWrapper>
            <ToastContainer
                position="top-right"
                autoClose={8000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnHover
            />
        </AuthContextProvider>
    );
}

export default MyApp;
