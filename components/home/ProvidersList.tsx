import React, { FC } from 'react';
import { CustomSlider } from '../slider/Slider';
import { SliderCard } from '../slider/SliderCard';
import { UserProviderI } from 'types/users/User.types';
import { CustomTitle } from '../layout/CustomTitle';
// import s from '../../styles/home/ProvidersList.module.css';

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

export const ProvidersList:FC = () => {
  return (
    <>
      <CustomTitle color="primary" htmlTag="h2" text="Listado de proveedores"/>
      <CustomSlider totalCards={providers.length}>
        {providers.map((provider) => (
          <SliderCard
            key={provider.id}
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
        ))}
      </CustomSlider>
    </>
  )
}