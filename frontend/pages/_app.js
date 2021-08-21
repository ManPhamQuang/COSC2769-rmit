import "tailwindcss/tailwind.css";
import { AuthContextProvider } from "../context/authContext/AuthContext";
import "./index.css";
import { useRouter } from "next/router";
import DefaultLayout from "../components/Layout";
import DashboardLayout from "../components/DashboardLayout";

function MyApp({ Component, pageProps }) {
    const { pathname } = useRouter();
    const isDashboard = pathname.includes("/dashboard");

    if (!isDashboard) {
        return (
            <AuthContextProvider>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </AuthContextProvider>
        );
    }

    if (isDashboard) {
        return (
            <AuthContextProvider>
                <DashboardLayout>
                    <Component {...pageProps} />
                </DashboardLayout>
            </AuthContextProvider>
        );
    }

    //   return getLayout(
    //     <AuthContextProvider>
    //       <Component {...pageProps} />
    //     </AuthContextProvider>
    //   );
}

export default MyApp;
