import React, { FC } from 'react';

export enum CardVariant {
  outlined='outlined',
  primary='primary'
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children?: React.ReactNode
}

const Card: FC<CardProps> = 
  ({ 
    width, 
    height,
    variant, 
    children 
  }) => {
  return(
    <div style={{
      width, 
      height, 
      border: variant === CardVariant.outlined? '5px solid lightgray' : 'none',
      background: variant === CardVariant.primary? 'lightgray' : 'white'
    }}>
      {children}
    </div>
  )
}

export default Card;
