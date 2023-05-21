// Makes styles accessible to all pages
import { PropsWithChildren } from "react";
import "../styles/styles.scss";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html>
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
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
