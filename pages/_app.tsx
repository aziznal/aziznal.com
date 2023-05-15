// Makes styles accessible to all pages
import "../styles/styles.scss";
import "./layout.scss";

import type { AppProps } from "next/app";
import Layout from "./layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        if (router.route.length > 1) return;

        router.push('/main')
    }, [])

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
