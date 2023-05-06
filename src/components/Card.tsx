import React, { FC } from 'react';

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode
}

const Card: FC<CardProps> = 
  ({ 
    width, 
    height, 
    children 
  }) => {
  return(
    <div style={{width, height, border: '5px solid gray'}}>
      {children}
    </div>
  )
}

export default Card;
