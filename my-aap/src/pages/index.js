import Hero from "@/compoents/Hero";
import Skills from "@/compoents/Skills";
import Projects from "@/compoents/Projects";
import Contacts from "@/compoents/Contact";


import Head from "next/head";
import Sobre from "@/compoents/Sobre";


const Home = () => {
    return (
        <>
            <Head>
                <title>Caio portfolio</title>
                <meta name="description" content="caio portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
				<Hero />
                <Sobre />
				<Skills />
				<Projects />
				<Contacts />
			</div>
        </>
    )
}

export default Home