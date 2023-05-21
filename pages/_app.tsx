// Makes styles accessible to all pages
import "../styles/styles.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div
            style={{
                minHeight: "100vh",
            }}
        >
            <Component {...pageProps} />
        </div>
    );
}
