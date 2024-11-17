'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

import { Logo } from '../logo';
import { Nav } from '../nav';
import { Hero } from '../hero';

import styles from './header.module.scss';

export const Header = () => {
  const pathname = usePathname();
  return (
    <header
      className={styles.container}
      style={{
        backgroundImage:
          pathname === '/' ? 'url(/img/header-bg.jpg)' : 'url(/img/header-bg-small.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: pathname === '/' ? '100vh' : 'auto',
      }}>
      <div className={styles.wrapper}>
        <Logo
          nameLogo="Путешествие по миру"
          className={styles.logo}
          classNameTitle={styles.title}
        />
        <Nav />
      </div>
      {pathname === '/' && <Hero />}
    </header>
  );
};
