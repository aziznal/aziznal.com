import { Html, Head, Main, NextScript } from "next/document";

/**
 * This component is used to add the roboto font to the <head> tag
 */

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <body>
                <Main />

                <NextScript />
            </body>
        </Html>
    );
}
