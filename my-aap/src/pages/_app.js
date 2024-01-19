import "../styles/globals.css"
import Layout from "../compoents/Layout";

export default function({Component, pageProps}) {
    return(
        <Layout >
            <Component {...pageProps}/>
        </Layout>
    )
}