import store from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider, useDispatch } from "react-redux";
import Notification from "@/components/Notification/Notification";
import { useEffect } from "react";
import { login } from "@/store/reducers/authReducer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppContent />
      <Notification />
      <Component {...pageProps} />
    </Provider>
  );
}

const AppContent = () => {
  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(login({ token, user: JSON.parse(user) }));
    }
  }, []);

  return null;
};
