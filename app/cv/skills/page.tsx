import styles from "./page.module.scss";

const Skill = ({ skillName }: { skillName: string }) => {
    return <span className={`${styles["skill"]}`}>{skillName}</span>;
};

export default function Page() {
    return (
        <>
            <h1
                style={{
                    fontSize: "56px",
                }}
            >
                SKILLS
            </h1>

            <div
                style={{
                    marginTop: "80px",
                }}
            ></div>

            <section>
                <h4 className="mb-4 faded">Technical Skills</h4>

                <div className="d-flex fx-gap-3 fx-wrap">
                    <Skill skillName="Angular" />
                    <Skill skillName="React" />
                    <Skill skillName="Typescript" />
                    <Skill skillName="HTML" />
                    <Skill skillName="CSS" />
                    <Skill skillName="Responsive" />
                    <Skill skillName="Design" />
                    <Skill skillName="Figma" />
                    <Skill skillName="Git" />
                    <Skill skillName="Jest" />
                    <Skill skillName="Cypress" />
                    <Skill skillName="Javascript" />
                    <Skill skillName="Linux" />
                    <Skill skillName="SCSS" />
                    <Skill skillName="Python" />
                    <Skill skillName="Docker" />
                    <Skill skillName="Vim" />
                    <Skill skillName="Extensive Task Analysis" />
                </div>
            </section>

            <section className="mt-12">
                <h4 className="mb-4 faded">Soft Skills</h4>

                <div className="d-flex fx-gap-3 fx-wrap">
                    <Skill skillName="Team Management" />
                    <Skill skillName="Adaptability to Change" />
                    <Skill skillName="Solution-Oriented" />
                    <Skill skillName="Resourceful" />
                </div>
            </section>
        </>
    );
}
