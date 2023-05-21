// Makes styles accessible to all pages
import { PropsWithChildren } from "react";
import "../styles/styles.scss";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />

                {/* Roboto Font*/}
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />

                {/* Ubuntu Font */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
                    rel="stylesheet"
                />
            </head>

            <body
                style={{
                    minHeight: "100vh",
                }}
            >
                <main>{children}</main>
            </body>
        </html>
    );
}
