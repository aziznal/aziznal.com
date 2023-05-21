// Makes styles accessible to all pages
import "../styles/styles.scss";

import type { AppProps } from "next/app";

import Layout from "./layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
