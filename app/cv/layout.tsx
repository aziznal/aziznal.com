import CvNav from "./CvNav/CvNav";

export default function CvPage({ children }: { children: React.ReactNode }) {
    // TODO: add default re-route to main section

    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
            }}
        >
            <CvNav></CvNav>

            <>{children}</>
        </div>
    );
}
