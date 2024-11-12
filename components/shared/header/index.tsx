import React from 'react';

import { Logo } from '../logo';
import { Nav } from '../nav';
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <Logo nameLogo="ФорестТревел" />
      <Nav />
    </header>
  );
};
