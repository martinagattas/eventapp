import { NextPage } from "next";
import { LoginForm } from "eventapp/components/login/LoginForm";
import Head from "next/head";
import { Layout } from "eventapp/components/layout/Layout";

const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>Eventify</title>
                <meta property="og:title" content="Eventify" key="title"></meta>
                <meta name="description" content="Planifica tu evento de forma sencilla y eficaz"/>
                <meta charSet="utf-8"/>
                <meta name="evento, app de eventos, organización de eventos, organización"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                {/* <link rel="icon" href="/favicon.ico"/> */}
            </Head>

            <Layout variant="auth">
                <LoginForm/>
            </Layout>
        </>
    )
}

export default Login;