import React from 'react';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return <div className={className} style={{ height: '100px', backgroundColor: '#265847' }}></div>;
};
