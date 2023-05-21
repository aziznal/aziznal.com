import { PropsWithChildren } from "react";
import CvNav from "./CvNav/CvNav";

export default function CvPage({ children }: PropsWithChildren) {
    // TOOD: add default re-route to main section

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
