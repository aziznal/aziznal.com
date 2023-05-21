import Link from "next/link";
import styles from "./Header.module.scss";

export function Header() {
    return (
        <header className={styles["header"]}>
            <div className={styles["link-container"]}>
                <Link href='/main' className={styles["link"]} data-active>
                    Home
                </Link>

                <Link href='/about' className={styles["link"]}>About</Link>

                <Link href='/projects' className={styles["link"]}>Projects</Link>

                <Link href='/articles' className={styles["link"]}>Articles</Link>

                <Link href='/contact-me' className={styles["link"]}>Contact Me</Link>
            </div>

            <div className={styles["link-container"]}>
                <span>Lang</span>
                <span>Theme</span>
            </div>
        </header>
    );
}
