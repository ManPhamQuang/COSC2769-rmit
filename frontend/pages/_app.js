import "tailwindcss/tailwind.css";
import { AuthContextProvider } from "../context/authContext/AuthContext";
import "./index.css";
import { useRouter } from "next/router";
import DefaultLayout from "../components/Layout";
import DashboardLayout from "../components/DashboardLayout";

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
        </AuthContextProvider>
    );
}

export default MyApp;
