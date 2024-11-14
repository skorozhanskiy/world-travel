import React from 'react';
import { Logo } from '../logo';

import Link from 'next/link';
import styles from './footer.module.scss';

interface Props {
  className?: string;
}

export const contactList = [
  {
    id: '0',
    title: 'Информация',
    links: [
      { link: '/tourist_destinations', linkName: 'Туры и направления' },
      { link: '/about_company', linkName: 'О компании' },
      { link: '/gallery', linkName: 'Галлерея' },
      { link: '/contacts', linkName: 'Контакты' },
    ],
  },
  {
    id: '1',
    title: 'Услуги',
    links: [
      { link: '/', linkName: 'Бесплатные туры' },
      { link: '/', linkName: 'Невероятные приключения' },
      { link: '/', linkName: 'Экстримальный отдых' },
      { link: '/', linkName: 'Экзотические джунгли' },
      { link: '/', linkName: 'Трекинг походы' },
    ],
  },
  {
    id: '2',
    title: 'Контакты',
    links: [
      {
        link: 'tel:+70000000000',
        linkName: '0 (000) 000-00-00',
      },
      {
        link: 'mailto:info@info.info',
        linkName: 'info@info.info',
      },
      {
        link: 'https://yandex.ru/maps/-/CDhl5-8J',
        linkName: 'г. Москва, Рязанский проспект 54, офис 112.',
        target: '_blank',
      },
    ],
  },
];

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left_block}>
          <Logo nameLogo="Путешествие по миру" />
          <p className={styles.text}>
            История о том, как мы должны сидеть сложа руки, о том, как мы относимся к элитам, о том,
            как мы относимся к временным происшествиям, о труде и великой долоре.
          </p>
        </div>
        <div className={styles.right_block}>
          {contactList.map((item, id) => (
            <div key={id} className={styles.block}>
              <h1 className={styles.title}>{item.title}</h1>
              <ul className={styles.list}>
                {item.links.map((obj, i) => (
                  <li className={styles.item} key={i}>
                    <Link className={styles.link} href={obj.link} target={obj.target}>
                      {obj.linkName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
