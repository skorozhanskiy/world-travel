import React from 'react';

import { Logo } from '../logo';
import { Nav } from '../nav';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header
      className={styles.container}
      style={{
        backgroundImage: 'url(/img/header-bg-small.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className={styles.wrapper}>
        <Logo
          nameLogo="Путешествие по миру"
          className={styles.logo}
          classNameTitle={styles.title}
        />
        <Nav />
      </div>
    </header>
  );
};
