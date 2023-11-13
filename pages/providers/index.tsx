import { Layout } from 'eventapp/components/layout/Layout';
import { ProvidersList } from 'eventapp/components/providers/ProvidersList';
import { NextPage } from 'next';
import Head from 'next/head';
import { UserProviderI } from 'types/users/User.types';

// fixMe: traer listado de proveedores de services
const providers: UserProviderI[] = [{
  id: 1,
  type: 'provider',
  avatar: '/users/avatar.png',
  firstName: 'María',
  lastName: 'Pérez',
  email: 'maria@perez.com',
  country: 'Argentina',
  province: 'Mendoza',
  shortDescription: 'La mejor fotógrafa del mundo',
  description: 'Más de 1.000 casamientos al mes',
  categories: ['photography', 'food'],
  defaultImage: '/categories/photography.png'
}];

const Categories: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eventify | Proveedores</title>
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
        <ProvidersList listVariant='grid' title={{text: 'Proveedores'}}/>
      </Layout>
    </>
  )
}

export default Categories;