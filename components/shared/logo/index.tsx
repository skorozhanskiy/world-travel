import React from 'react';
import { Lobster } from 'next/font/google';
interface Props {
  className?: string;
  classNameTitle?: string;
  nameLogo: string;
}

const inter = Lobster({ weight: '400', subsets: ['latin'] });
export const Logo: React.FC<Props> = ({ className, classNameTitle, nameLogo }) => {
  return (
    <div className={`${className} ${inter.className}`}>
      <h1 className={classNameTitle}>{nameLogo}</h1>
    </div>
  );
};
