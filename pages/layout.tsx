import { Footer, Header } from "@components";
import type { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
    return (
        <div className="layout-container">
            <Header />
                {props.children}
            <Footer />
        </div>
    );
}
