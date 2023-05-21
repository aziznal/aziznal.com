import styles from "./CvNav.module.scss";

export default function CvNav() {
    return (
        <div
            className="d-flex fx-column fx-gap-6 fx-cross-axis-center fx-main-axis-center fx-fill"
            style={{
                backgroundColor: "#BD5D38",
            }}
        >
            <img
                style={{
                    borderRadius: "50%",
                    border: "10px solid #C97C60",
                }}
                width="250"
                src="https://picsum.photos/600"
                alt="My profile image"
            ></img>

            <span
                className={`${styles["nav-link"]} ${styles["highlighted"]} mt-4`}
            >
                ABOUT
            </span>

            <span className={`${styles["nav-link"]}`}>EXPERIENCE</span>

            <span className={`${styles["nav-link"]}`}>SKILLS</span>

            <span className={`${styles["nav-link"]}`}>EDUCATION</span>

            <span className={`${styles["nav-link"]}`}>ARTICLES</span>

            <span className={`${styles["nav-link"]}`}>LANGUAGES</span>

            <span className={`${styles["nav-link"]}`}>INTERESTS</span>
        </div>
    );
}
