import { PropsWithChildren, ReactNode } from 'react';

export interface CustomButtonI extends PropsWithChildren {
  variant: 'text' | 'contained' | 'outlined',
  customColor: 'primary' | 'secondary' | 'white' | 'gray',
  type?: 'submit' | 'button' | 'reset' | undefined,
  disabled?: boolean,
  href?: string,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}