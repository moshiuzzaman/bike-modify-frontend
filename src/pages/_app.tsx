import Providers from "@/lib/Provider";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
  

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <SessionProvider session={session}>
            <ToastContainer />
            <Providers>
                <Component {...pageProps} />
            </Providers>
        </SessionProvider>
    );
}
