import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { FC, PropsWithChildren, ReactNode } from 'react';
import Slider from 'react-slick';
import useMediaQuery from '@mui/material/useMediaQuery';
import s from '../../styles/slider/Slider.module.css';

interface CustomSliderProps extends PropsWithChildren {
  className?: string,
  totalCards: number,
  children: ReactNode
}

export const CustomSlider:FC<CustomSliderProps> = ({ className, totalCards, children }) => {
  const containerClass = `${s.slider} ${className}`;

  const xs = useMediaQuery('(max-width:600px)');
  const sm = useMediaQuery('(max-width:960px)');
  const md = useMediaQuery('(max-width:1280px)');
  const lg = useMediaQuery('(max-width:1920px)');

  const showSlides = xs ? 1 : (sm ? 2 : (md ? 3 : 4));

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: totalCards >= showSlides ? showSlides : totalCards,
    slidesToScroll: showSlides
  };

  return (
    <Slider {...settings} className={containerClass}>
      {children}
    </Slider>
  )
}