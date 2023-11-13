import { CategoriesList } from 'eventapp/components/categories/CategoriesList';
import { Hero } from 'eventapp/components/home/Hero';
import { ProvidersList } from 'eventapp/components/providers/ProvidersList';
import { Layout } from 'eventapp/components/layout/Layout';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eventify</title>
        <meta property='og:title' content='Eventify' key='title'></meta>
        <meta
          name='description'
          content='Planifica tu evento de forma sencilla y eficaz'
        />
        <meta charSet='utf-8' />
        <meta name='evento, app de eventos, organización de eventos, organización' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout variant='navigation'>
        <Hero/>
        <ProvidersList listVariant='slider' title={{text: 'Proveedores'}}/>
        <CategoriesList listVariant='slider' title={{text: 'Categorías'}}/>
      </Layout>
    </>
  )
}

export default Home;