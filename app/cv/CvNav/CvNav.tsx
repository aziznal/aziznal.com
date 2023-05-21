import ActiveLink from "./ActiveLink";

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

            <ActiveLink href="/cv/about" className="mt-4">
                ABOUT
            </ActiveLink>

            <ActiveLink href="/cv/experience">EXPERIENCE</ActiveLink>

            <ActiveLink href="/cv/skills">SKILLS</ActiveLink>

            <ActiveLink href="/cv/education">EDUCATION</ActiveLink>

            <ActiveLink href="/cv/articles">ARTICLES</ActiveLink>

            <ActiveLink href="/cv/languages">LANGUAGES</ActiveLink>

            <ActiveLink href="/cv/interests">INTERESTS</ActiveLink>
        </div>
    );
}
