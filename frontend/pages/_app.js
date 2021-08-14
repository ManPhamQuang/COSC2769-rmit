import "tailwindcss/tailwind.css";
import { AuthContextProvider } from "../context/authContext/AuthContext";
import "./index.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
