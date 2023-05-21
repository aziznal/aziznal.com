import { Footer, Header } from "@components";
import { PropsWithChildren } from "react";

import styles from './layout.module.scss';

export default function Layout(props: PropsWithChildren) {
    return (
        <div className={styles["layout-container"]}>
            <Header />
                {props.children}
            <Footer />
        </div>
    );
}
