export default function Page() {
    return (
        <>
            <h1
                style={{
                    fontSize: "56px",
                }}
            >
                ABOUT
            </h1>

            <div
                style={{
                    marginTop: "80px",
                }}
            ></div>

            <h1 className="">Abdulaziz Nal</h1>

            <h3 className="fw-regular faded">Frontend Developer</h3>

            <p
                className="mt-4"
                style={{
                    fontSize: "21px",
                }}
            >
                {`
                    I have 4+ years of developer experience, mostly in frontend
                    Using Angular. I'm highly experienced with the fundamentals of
                    HTML, CSS, and JavaScript / TypeScript, and Responsive design,
                    as well as UI tools like Figma, and organizational tools like
                    Jira, Trello, etc. I also actively contribute to open source.
                `}
            </p>
        </>
    );
}
