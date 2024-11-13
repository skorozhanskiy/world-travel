import React from 'react';
import { GeneralBlock } from '../components/shared/general-block';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
      <GeneralBlock
        contentTitle="Популярные направления"
        contentText="Когда Горный Алтай называют второй Швейцарией, алтайцы отвечают, что нужно еще разобраться, кто тут второй. Чтобы расставить все по местам, отправляйтесь в путешествие по Чуйскому тракту, по Горному Алтаю до самой Монголии. 962 км — полный маршрут Новосибирск—Новоалтайск—Бийск—Майма —государственная граница с Монголией."
        contentButton="Подробнее"
      />
      <GeneralBlock src="../img/img-01.jpg" />
      <GeneralBlock src="../img/img-01.jpg" pictureTitle="Популярные направления" />
    </div>
  );
}
