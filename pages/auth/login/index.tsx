import { LoginForm } from 'eventapp/components/auth/LoginForm';
import { Layout } from 'eventapp/components/layout/Layout';
import { NextPage } from 'next';
import Head from 'next/head';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eventify | Iniciar sesión</title>
        <meta property='og:title' content='Eventify' key='title'></meta>
        <meta
          name='description'
          content='Inicia sesión para gestionar tu evento o tus productos'
        />
        <meta charSet='utf-8' />
        <meta name='evento, app de eventos, organización de eventos, organización' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout variant='general'>
        <LoginForm/>
      </Layout>
    </>
  )
}

export default Login;