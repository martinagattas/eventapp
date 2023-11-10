import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img
          src='https://cdn0.casamientos.com.ar/vendor/6379/3_2/320/jpg/31_7_106379-158773764384166.webp'
          alt='Imagen 1'
        />
      </div>
      <div>
        <img
          src='https://cdn0.casamientos.com.ar/vendor/6379/3_2/320/jpg/31_7_106379-158773764384166.webp'
          alt='Imagen 2'
        />
      </div>
      <div>
        <img
          src='https://cdn0.casamientos.com.ar/vendor/6379/3_2/320/jpg/31_7_106379-158773764384166.webp'
          alt='Imagen 3'
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
