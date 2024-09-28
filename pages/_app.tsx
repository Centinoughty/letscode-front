import store from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Notification from "@/components/Notification/Notification";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Notification />
      <Component {...pageProps} />
    </Provider>
  );
}
