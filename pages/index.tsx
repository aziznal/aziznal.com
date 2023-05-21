import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MainPage() {
    const router = useRouter();

    // re-route when user is on the root page
    useEffect(() => {
        if (router.route.length > 1) return;

        router.push("/main");
    }, []);

    return <div>Redirecting</div>;
}
