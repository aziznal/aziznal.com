import styles from "./page.module.scss";

export default function Page() {
    return (
        <>
            <h1
                style={{
                    fontSize: "56px",
                }}
            >
                EXPERIENCE
            </h1>

            <div
                style={{
                    marginTop: "80px",
                }}
            ></div>

            <div className={`${styles["experience-container"]}`}>
                <section>
                    <div className={`${styles["experience-heading"]}`}>
                        <h3>Senior Frontend Developer</h3> |
                        <h5 className="fw-light">Anywai TR</h5> |
                        <h5 className="fw-light">{`October 2022 - Present`}</h5>
                    </div>

                    <ul className={`${styles["experience-details-list"]}`}>
                        <li>
                            Lead a 4-person frontend team and coordinated
                            application development with Jira, confluence, and
                            Miro
                        </li>

                        <li>
                            Developed a frontend for Udemy-like application
                            integrated with the blockchain with Angular
                        </li>

                        <li>
                            Implemented features like theme-changing, wide range
                            responsiveness, and multiple language support
                        </li>

                        <li>
                            Developed an extensive re-usable library of UI
                            components with AngulaS and Material
                        </li>

                        <li>
                            Wrote tests including E2E tests using Jest and
                            Cypress
                        </li>

                        <li>
                            Designed interactive prototypes to show to clients
                            with Figma
                        </li>

                        <li>
                            Refined team processes for higher efficiency and
                            smoother development, such as automation on Jira
                        </li>

                        <li>
                            Researched and implemented new approaches for
                            development processes, including better commit
                            history, improved task analysis, and regression
                            testing
                        </li>

                        <li>
                            Handled communication with management and product
                            owners and focused on keeping feedback cycles short.
                        </li>
                    </ul>
                </section>

                <section>
                    <div className={`${styles["experience-heading"]}`}>
                        <h3>Frontend Developer</h3> |
                        <h5 className="fw-light">Anywai TR</h5> |
                        <h5 className="fw-light">{`August 2022 - October 2022`}</h5>
                    </div>

                    <ul className={`${styles["experience-details-list"]}`}>
                        <li>
                            Implemented a trello-like columnar interface for
                            creating and managing surveys with Angular
                        </li>

                        <li>Wrote E2E tests using Cypress</li>

                        <li>
                            Implemented an admin-side content management
                            interface with Angular
                        </li>

                        <li>
                            Collaborated on a frontend for a charity app
                            integrated with the blockchain with React
                        </li>

                        <li>
                            Created interactive charts with d3.js and Angular
                        </li>

                        <li>
                            Designed UI for multiple applications, including
                            mobile, with Figma
                        </li>
                    </ul>
                </section>

                <section>
                    <div className={`${styles["experience-heading"]}`}>
                        <h3>Frontend Developer</h3> |
                        <h5 className="fw-light">Freelance</h5> |
                        <h5 className="fw-light">{`August 2018 - August 2021`}</h5>
                    </div>
                </section>
            </div>
        </>
    );
}
