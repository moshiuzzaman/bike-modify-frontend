import Providers from "@/lib/Provider";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Providers>
                    <Main />
                    <NextScript />
                </Providers>
            </body>
        </Html>
    );
}
