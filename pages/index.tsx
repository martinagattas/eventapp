import { ClientsHero } from 'eventapp/components/home/ClientsHero';
import { Layout } from 'eventapp/components/layout/Layout';
import Main from 'eventapp/components/main/Main';
import ProviderList from 'eventapp/components/providerList/ProviderList';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const providers = [
    {
      title: 'Proveedor 1',
      imageSrc: 'url',
      description: 'Descripción del proveedor 1',
    },
    {
      title: 'Proveedor 2',
      imageSrc: 'url',
      description: 'Descripción del proveedor 2',
    },
    {
      title: 'Proveedor 3',
      imageSrc: 'url',
      description: 'Descripción del proveedor 1',
    },
    {
      title: 'Proveedor 4',
      imageSrc: 'url',
      description: 'Descripción del proveedor 2',
    },
  ];
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

      <Layout variant='general'>{/* <ClientsHero/> */}</Layout>
      <Main />
      <ProviderList providers={providers} />
    </>
  );
};

export default Home;
