import React from 'react';
import { GeneralBlock } from '../components/shared/general-block';

const listContent = [
  {
    id: 1,
    contentTitle: 'Популярные направления',
    contentText:
      'Когда Горный Алтай называют второй Швейцарией, алтайцы отвечают, что нужно еще разобраться, кто тут второй. Чтобы расставить все по местам, отправляйтесь в путешествие по Чуйскому тракту, по Горному Алтаю до самой Монголии. 962 км — полный маршрут Новосибирск—Новоалтайск—Бийск—Майма —государственная граница с Монголией.',
    contentButton: 'Подробнее',
    buttonUrl: '/',
  },
  {
    id: 2,
    src: '../img/img-01.jpg',
    imgUrl: '/',
  },
  {
    id: 3,
    src: '../img/img-02.jpg',
    imgUrl: '/',
  },
  {
    id: 4,
    contentTitle: 'Впечатляющие маршруты',
    contentText:
      'Вишенкой на торте станет поездка в Национальный парк Порт-Кэмпбелл через Ocean Road, которая сама по себе стоит визита в Австралию. Полюбуетесь одной из главных достопримечательностей страны — скалами, которые до 1922 года были известны в народе как «Хрюшка и поросята», а сегодня носят название «Двенадцать апостолов».',
    contentButton: 'Подробнее',
    buttonUrl: '/',
  },
  {
    id: 5,
    src: '../img/img-01.jpg',
    alt: 'Картинка компаса',
    pictureTitle: 'Популярные направления',
    imgUrl: '/',
  },
];
export default function Home() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
      {listContent.map((item) => (
        <GeneralBlock key={item.id} {...item} />
      ))}
    </div>
  );
}
