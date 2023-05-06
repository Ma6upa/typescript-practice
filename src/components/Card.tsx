import React from 'react';

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode
}

const Card = ({ width, height, children }: CardProps) => {
  return(
    <div style={{width, height, border: '5px solid gray'}}>
      {children}
    </div>
  )
}

export default Card;
