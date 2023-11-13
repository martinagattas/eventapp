import React, { FC, useEffect, useState } from 'react';
import { CustomSlider } from '../slider/Slider';
import { UserProviderI } from 'types/users/User.types';
import { CustomTitle, CustomTitleI } from '../layout/CustomTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Section } from '../layout/Section';
import { ProvidersCard } from './ProvidersCard';
import Grid from '@mui/material/Grid';
import { getProviders } from 'eventapp/services/providers/providers.service';

interface ProvidersListI {
  title?: CustomTitleI,
  listVariant?: 'slider' | 'grid'
}

export const ProvidersList:FC<ProvidersListI> = ({ title, listVariant = 'slider' }) => {
  const { color = 'primary', htmlTag = 'h2', text } = {...title};

  const [providers, setProviders] = useState<UserProviderI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {        
        const providersData = await getProviders();
        setProviders(providersData);
      } catch (error) {
        console.error('Error al obtener proveedores:', error);
      }
    };
    fetchData();
  }, []);

  const xs = useMediaQuery('(max-width:600px)');
  const sm = useMediaQuery('(max-width:960px)');
  const md = useMediaQuery('(max-width:1280px)');

  const cardsToShow = xs ? 1 : (sm ? 2 : (md ? 3 : 4));

  return (
    <Section variant="contained">
      {listVariant === 'slider' ? (
        <>
          <CustomTitle color={color} htmlTag={htmlTag} text={text} />
          <CustomSlider variant="cards" totalCards={providers.length} cardsToShow={cardsToShow}>
            {providers.map((p) => (
              <ProvidersCard key={p.id} provider={p}/>
            ))}
          </CustomSlider>
        </>
      ) : (
        <>
          <CustomTitle color={color} htmlTag={htmlTag} text={text} />
          <Grid container spacing={2}>
            {providers.map((p) => (
              <Grid key={p.id} item xs={12} sm={6} md={4}>
                <ProvidersCard key={p.id} provider={p}/>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Section>
  )
}