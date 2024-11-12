'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

import styles from './nav.module.scss';

const navList = [
  { id: 1, name: 'Главная', link: '/' },
  { id: 2, name: 'Туры и направления', link: '/tourist_destinations' },
  { id: 3, name: 'О компании', link: '/about_company' },
  { id: 4, name: 'Галерея', link: '/gallery' },
  { id: 5, name: 'Контакты', link: '/contacts' },
];
export const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className={styles.container}>
      <ul>
        {navList.map((item) => (
          <li key={item.id}>
            <Link className={pathname === item.link ? styles.active : ''} href={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
