import CvNav from "./CvNav/CvNav";

export default function CvPage({ children }: { children: React.ReactNode }) {
    // TODO: add default re-route to main section

    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",

                position: "relative",
            }}
        >
            <div
                style={{
                    position: "sticky",
                    top: "0",
                    height: "100vh",
                    flexBasis: "400px",
                }}
            >
                <CvNav></CvNav>
            </div>

            <div
                style={{
                    flex: "1",
                    paddingInline: "80px",
                    paddingTop: "120px",
                    fontFamily: "Ubuntu",
                }}
            >
                {children}
            </div>
        </div>
    );
}
