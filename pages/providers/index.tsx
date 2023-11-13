import Grid from '@mui/material/Grid';
import { CustomTitle } from 'eventapp/components/layout/CustomTitle';
import { Layout } from 'eventapp/components/layout/Layout';
import { Section } from 'eventapp/components/layout/Section';
import { SliderCard } from 'eventapp/components/slider/SliderCard';
import { NextPage } from 'next';
import Head from 'next/head';
import { UserProviderI } from 'types/users/User.types';

// fixMe: traer listado de proveedores de services
const providers: UserProviderI[] = [{
  id: 1,
  type: 'provider',
  avatar: '/user/avatar.png',
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
        <Section variant='contained'>
          <CustomTitle color='primary' htmlTag='h1' text='Proveedores'/>
          <Grid container spacing={2}>
            {providers.map((provider) => (
              <Grid key={provider.id} item xs={12} sm={6} md={4}>
                <SliderCard
                  avatar={{
                    ariaLabel: `${provider.firstName} ${provider.lastName}`,
                    imgSrc: provider.avatar || '/user/avatar.png',
                    imgAlt: `${provider.firstName} ${provider.lastName}`
                  }}
                  title={`${provider.firstName} ${provider.lastName}`}
                  cardImg={{
                    imgSrc: provider.defaultImage,
                    imgAlt: provider.type
                  }}
                  description={provider.shortDescription}
                  extraDescription={`Categorías: ${provider.categories}`}
                  link={{
                    element: {
                      customVariant: 'button-outline',
                      customColor: 'primary',
                      href: `/provider/${provider.id}`
                    },
                    text: 'Ver proveedor'
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Section>
      </Layout>
    </>
  )
}

export default Categories;