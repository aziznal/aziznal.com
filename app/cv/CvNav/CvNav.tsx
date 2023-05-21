"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./CvNav.module.scss";

export default function CvNav() {
    const router = useRouter();

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

            <Link
                href="cv/about"
                className={`${styles["nav-link"]} mt-4 ${
                    router.asPath === "cv/about" ? "active" : null
                }`}
            >
                ABOUT
            </Link>

            <Link href="cv/experience" className={`${styles["nav-link"]}`}>
                EXPERIENCE
            </Link>

            <Link href="cv/skills" className={`${styles["nav-link"]}`}>
                SKILLS
            </Link>

            <Link href="cv/education" className={`${styles["nav-link"]}`}>
                EDUCATION
            </Link>

            <Link href="cv/articles" className={`${styles["nav-link"]}`}>
                ARTICLES
            </Link>

            <Link href="cv/languages" className={`${styles["nav-link"]}`}>
                LANGUAGES
            </Link>

            <Link href="cv/interests" className={`${styles["nav-link"]}`}>
                INTERESTS
            </Link>
        </div>
    );
}
