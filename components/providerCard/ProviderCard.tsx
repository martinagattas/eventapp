import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ProviderCardProps {
  name: string;
  images: string[]; // Array of image URLs
  rating: number;
  location: string;
  promotions: string;
  price: string;
  category : string;
}

const ProviderCard: React.FC<ProviderCardProps> = ({
  name,
  category,
  images,
  rating,
  location,
  promotions,
  price,
}) => {
  images = [
    'https://cdn0.casamientos.com.ar/vendor/6379/3_2/320/jpg/31_7_106379-158773764384166.webp',
    'https://cdn0.casamientos.com.ar/vendor/6379/3_2/320/jpg/31_7_106379-158773764384166.webp',
    'https://cdn0.casamientos.com.ar/vendor/6379/3_2/320/jpg/31_7_106379-158773764384166.webp',
    'https://cdn0.casamientos.com.ar/vendor/6379/3_2/320/jpg/31_7_106379-158773764384166.webp',
    'https://cdn0.casamientos.com.ar/vendor/6379/3_2/320/jpg/31_7_106379-158773764384166.webp',
  ];
  return (
    <Card>
      <Carousel showArrows={true} showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
      <CardContent>
        <Typography variant='h6' component='div'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <b>{category}</b>
        </Typography>
        {/* <br/>
        <Typography variant='body2' color='text.secondary'>
          {location}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {promotions}
        </Typography> */}
        <br/>
        <Typography variant='body2' color='text.secondary'>
          Desde: $ {price}
        </Typography>
        <br/>
        <Button variant='outlined' color='success' fullWidth>
          Ver proveedores
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProviderCard;
