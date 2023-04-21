import styles from "./Header.module.scss";

export function Header() {
    return (
        <header className={styles["header"]}>
            <div className={styles["link-container"]}>
                <span className={styles["link"]} data-active>
                    Home
                </span>
                <span className={styles["link"]}>About</span>
                <span className={styles["link"]}>Projects</span>
                <span className={styles["link"]}>Articles</span>
                <span className={styles["link"]}>Contact Me</span>
            </div>

            <div className={styles["link-container"]}>
                <span>Lang</span>
                <span>Theme</span>
            </div>
        </header>
    );
}
