import styles from "./MainSection.module.scss";

export function MainSection() {
    return (
        <section className={styles["main-section-container"]}>
            <div className={styles["title-section"]}>
                <h1>{`Hello, I'm Aziz`}</h1>

                <h2 className="mt-2">{`I'm a frontend developer`}</h2>

                <p className="mt-4">
                    {`Whether it's a basic landing page, or a full-blown web application, I can help you build it.`}
                </p>

                <div className="d-flex fx-row fx-gap-4 mt-12">
                    <button data-button data-large data-primary-gradient>
                        Contact Me
                    </button>

                    <button data-button data-large data-black data-outlined>
                        About me
                    </button>
                </div>
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

            <div>Linkedin</div>
        </section>
    );
}
