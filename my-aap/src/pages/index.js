import Hero from "@/compoents/Hero";


import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Caio portfolio</title>
                <meta name="description" content="caio portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpeg" />
            </Head>
            <div>
                <Hero />
            </div>
        </>
    )
}

export default Home