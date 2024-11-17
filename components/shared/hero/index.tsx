import React from 'react';
import Link from 'next/link';

import styles from './hero.module.scss';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Путешествие всегда хорошая идея</h1>
        <h4 className={styles.subtitle}>Турпоходы по дикой природе</h4>
        <Link className={styles.link} href="#home">
          скрол вниз
        </Link>
      </div>
    </div>
  );
};
