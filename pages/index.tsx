import { ClientsHero } from 'eventapp/components/home/ClientsHero';
import { Layout } from 'eventapp/components/layout/Layout';
import Main from 'eventapp/components/main/Main';
import ProviderList from 'eventapp/components/providerList/ProviderList';
import { getAllProviders } from 'eventapp/services/providers/providers.service';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {

  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {        
        const providersData = await getAllProviders();

        console.log(providersData)
        // Actualiza el estado con los datos obtenidos
        setProviders(providersData);
      } catch (error) {
        console.error('Error al obtener proveedores:', error);
      }
    };

    // Llama a la función fetchData al montar el componente
    fetchData();
  }, []); // E

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
