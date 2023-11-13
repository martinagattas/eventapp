import React, { FC } from 'react';
import { CustomSlider } from '../slider/Slider';
import { SliderCard } from '../slider/SliderCard';
import { CustomTitle } from '../layout/CustomTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Section } from '../layout/Section';
import { CategoryT } from 'types/categories/Category.types';

// fixMe: traer listado de categorías de services
const categories: CategoryT[] = [{
  id: 1,
  type: 'food',
  description: 'Congela momentos de la mano de los mejores del mercado',
  defaultImage: '/categories/food.png'
}];

export const CategoriesList:FC = () => {
  const xs = useMediaQuery('(max-width:600px)');
  const sm = useMediaQuery('(max-width:960px)');
  const md = useMediaQuery('(max-width:1280px)');

  const cardsToShow = xs ? 1 : (sm ? 2 : (md ? 3 : 4));

  return (
    <Section variant="contained">
      <CustomTitle color="primary" htmlTag="h2" text="Listado de categorías"/>
      <CustomSlider variant="cards" totalCards={categories.length} cardsToShow={cardsToShow}>
        {categories.map((category) => (
          <SliderCard
            key={category.id}
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
        ))}
      </CustomSlider>
    </Section>
  )
}