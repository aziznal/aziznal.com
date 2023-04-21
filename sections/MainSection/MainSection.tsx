import styles from "./MainSection.module.scss";

export function MainSection() {
    return (
        <section
            className="d-flex fx-row fx-main-axis-space-between"
            styles={{
                width: "100%",
            }}
        >
            <div>
                <h1>{`Hello, I'm Aziz`}</h1>

                <h2>{`I'm a frontend developer`}</h2>

                <p>
                    {`Whether it's a basic landing page, or a full-blown web application, I can help you build it.`}
                </p>

                <button>Contact Me</button>

                <button>About me</button>
            </div>

            <div className={styles["image-section"]}>
                <div className={styles["box-1"]}></div>

                <div className={styles["box-2"]}></div>
                <div className={styles["box-3"]}></div>

                <div className={styles["box-4"]}></div>
                <div className={styles["box-5"]}></div>

                <img
                    src="/aziz.png"
                    alt="hero"
                    style={{
                        objectFit: "contain",
                    }}
                    className={styles["image"]}
                />
            </div>
        </section>
    );
}
