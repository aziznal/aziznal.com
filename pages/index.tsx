import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Title</title>
            </Head>

            <div className="d-flex fx-column fx-main-axis-center fx-cross-axis-center fx-gap-2">
                <h1 className="bg-primary p-2">Hello World!</h1>
                <h1 className="bg-secondary p-2">Hello World!</h1>
                <h1 className="bg-warn p-2">Hello World!</h1>
                <h1 className="bg-black p-2">Hello World!</h1>
            </div>
        </>
    );
}
