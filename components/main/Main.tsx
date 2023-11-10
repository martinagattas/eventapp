import React, { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Link, MenuItem } from '@mui/material';

interface Exp {
  label: string;
  value: string;
}
interface ExpItemProps {
  item: Exp;
}

const exps: Array<Exp> = [
  {
    label: 'Fiestas',
    value: '10K+',
  },
  {
    label: 'Matrimonios',
    value: '20+',
  },
  {
    label: 'Experiencias',
    value: '10+',
  },
];

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item;
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{
          color: '#3AB795',
          mb: { xs: 1, md: 2 },
          fontSize: { xs: 34, md: 44 },
          fontWeight: 'bold',
        }}
      >
        {value}
      </Typography>
      <Typography color='#000' variant='h5'>
        {label}
      </Typography>
    </Box>
  );
};

const Main: FC = () => {
  return (
    <Box
      id='hero'
      sx={{
        backgroundColor: 'background.paper',
        position: 'relative',
        pt: 4,
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={0}
          sx={{ flexDirection: { xs: 'column', md: 'unset' } }}
        >
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component='h2'
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 40, md: 70 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                  }}
                >
                  <Typography
                    component='mark'
                    sx={{
                      position: 'relative',
                      color: '#3AB795',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    Organiza{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        '& img': {
                          width: { xs: 146, md: 210 },
                          height: 'auto',
                        },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <img src='/headline-curve.svg' alt='Headline curve' />
                    </Box>
                  </Typography>
                  tu{' '}
                  <Typography
                    component='span'
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      '& svg': {
                        position: 'absolute',
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: 'auto',
                      },
                    }}
                  >
                    Evento
                    <svg version='1.1' viewBox='0 0 3183 3072'>
                      <g id='Layer_x0020_1'>
                        <path
                          fill='#127C71'
                          d='M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z'
                        />
                        <path
                          fill='#127C71'
                          d='M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z'
                        />
                        <path
                          fill='#127C71'
                          d='M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z'
                        />
                      </g>
                    </svg>
                  </Typography>{' '}
                  <br />
                  ¡Hazlo Diferente!
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: '#000', lineHeight: 1.6 }}>
                  {'Promociones que te pueden interesar.'}
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <MenuItem>
                  <Link
                    href='/clients/register'
                    underline='none'
                    className='buttonLink buttonPrimaryLink'
                  >
                    Saber Mas
                  </Link>
                  <Link
                    href='/clients/register'
                    underline='none'
                    className='buttonLink buttonPrimaryLink'
                    marginLeft={2}
                  >
                    Registrarme
                  </Link>
                </MenuItem>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            <Box sx={{ lineHeight: 0 }}>
              <Image
                src='/home-hero.jpg'
                width={475}
                height={587}
                alt='Hero img'
              />
            </Box>
          </Grid>
        </Grid>

        {/* Experience */}
        <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4 }}>
          <Grid container spacing={2}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={4}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Main;
