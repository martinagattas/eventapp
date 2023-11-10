import React from 'react';
import ProviderCard from '../providerCard/ProviderCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

interface Provider {
  title: string;
  imageSrc: string;
  description: string;
}

interface ProviderListProps {
  providers: Provider[];
}

const ProviderList: React.FC<ProviderListProps> = ({ providers }) => {
  return (
    <Grid container spacing={2}>
      {providers.map((provider, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Box m={2}>
            <ProviderCard
              title={provider.title}
              imageSrc={provider.imageSrc}
              description={provider.description}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProviderList;
