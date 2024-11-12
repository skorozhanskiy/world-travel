import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

const navList = [
  { id: 1, name: 'Главная', link: '/' },
  { id: 2, name: 'Туры и направления', link: '/' },
  { id: 3, name: 'О компании', link: '/' },
  { id: 4, name: 'Галерея', link: '/' },
  { id: 5, name: 'Контакты', link: '/' },
];
export const Nav: React.FC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        {navList.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
