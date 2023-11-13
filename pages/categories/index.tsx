import Grid from '@mui/material/Grid';
import { CustomTitle } from 'eventapp/components/layout/CustomTitle';
import { Layout } from 'eventapp/components/layout/Layout';
import { Section } from 'eventapp/components/layout/Section';
import { SliderCard } from 'eventapp/components/slider/SliderCard';
import { NextPage } from 'next';
import Head from 'next/head';
import { CategoryT } from 'types/categories/Category.types';

// fixMe: traer listado de categorías de services
const categories: CategoryT[] = [{
  id: 1,
  type: 'food',
  description: 'Congela momentos de la mano de los mejores del mercado',
  defaultImage: '/categories/food.png'
}];

const Categories: NextPage = () => {
  return (
    <>
      <Head>
        <title>Eventify | Categorías</title>
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
          <CustomTitle color='primary' htmlTag='h1' text='Categorías'/>
          <Grid container spacing={2}>
            {categories.map((category) => (
              <Grid key={category.id} item xs={12} sm={6} md={4}>
                <SliderCard
                  title={`${category.type}`}
                  cardImg={{
                    imgSrc: category.defaultImage || '',
                    imgAlt: category.type
                  }}
                  description={category.description}
                  favButtons={false}
                  link={{
                    element: {
                      customVariant: 'button-outline',
                      customColor: 'primary',
                      href: `/categories/${category.type}`
                    },
                    text: 'Buscar proveedores'
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