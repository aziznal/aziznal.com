// Makes styles accessible to all pages
import { PropsWithChildren } from "react";
import "../styles/styles.scss";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <div
            style={{
                minHeight: "100vh",
            }}
        >
            {children}
        </div>
    );
}
