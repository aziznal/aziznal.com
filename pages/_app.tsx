// Makes styles accessible to all pages
import "../styles/styles.scss";
import "./layout.scss";

import type { AppProps } from "next/app";

import { Footer, Header } from "@components";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="layout-container">
            <Header />

            <main>
                <Component {...pageProps} />
            </main>

            <Footer />
        </div>
    );
}
