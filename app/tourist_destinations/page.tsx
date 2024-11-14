import React from 'react';
import { MainContainer, GeneralBlock, CommonTitle } from '@/components/shared';
const listContent = [
  {
    id: 1,
    src: '../img/img-01.jpg',
    alt: 'Картинка компаса',
    pictureTitle: 'Популярные направления',
    imgUrl: '/',
  },
  {
    id: 2,
    src: '../img/img-01.jpg',
    alt: 'Картинка компаса',
    pictureTitle: 'Экстремальный отдых',
    imgUrl: '/',
  },
  {
    id: 3,
    src: '../img/img-01.jpg',
    alt: 'Картинка компаса',
    pictureTitle: 'Невероятные приключения',
    imgUrl: '/',
  },
  {
    id: 4,
    src: '../img/img-01.jpg',
    alt: 'Картинка компаса',
    pictureTitle: 'Трекинг походы',
    imgUrl: '/',
  },
  {
    id: 5,
    src: '../img/img-01.jpg',
    alt: 'Картинка компаса',
    pictureTitle: 'Экзотические джунгли',
    imgUrl: '/',
  },
  {
    id: 6,
    src: '../img/img-01.jpg',
    alt: 'Картинка компаса',
    pictureTitle: 'Популярные направления',
    imgUrl: '/',
  },
];
export default function TouristDestinations() {
  return (
    <MainContainer>
      <CommonTitle titleName="Туры и направления" />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '50px',
          rowGap: '90px',
          justifyContent: 'space-around',
        }}>
        {listContent.map((item) => (
          <GeneralBlock key={item.id} {...item} />
        ))}
      </div>
    </MainContainer>
  );
}
