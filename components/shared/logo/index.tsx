import React from 'react';

interface Props {
  className?: string;
  nameLogo: string;
}

export const Logo: React.FC<Props> = ({ className, nameLogo }) => {
  return (
    <div className={className}>
      <h1>{nameLogo}</h1>
    </div>
  );
};
