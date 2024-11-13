import React from 'react';
import styles from './general-block.module.scss';
import Link from 'next/link';
interface Props {
  imgUrl?: string;
  src?: string;
  alt?: string;
  pictureTitle?: string;
  contentTitle?: string;
  contentText?: string;
  contentButton?: string;
  buttonUrl?: string;
}

export const GeneralBlock: React.FC<Props> = ({
  imgUrl,
  src,
  alt,
  pictureTitle,
  contentTitle,
  contentText,
  contentButton,
  buttonUrl,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.picture__wrapper}>
          <Link href={`/${imgUrl}`}>
            <img className={styles.picture__img} src={src} alt={alt} />
            <div className={pictureTitle === undefined ? 'hidden' : styles.picture__shadow}>
              <h3 className={styles.picture__title}>{pictureTitle}</h3>
            </div>
          </Link>
        </div>
        <div className={src === undefined ? styles.content__wrapper : 'hidden'}>
          <h1 className={styles.content__title}>{contentTitle}</h1>
          <p className={styles.content__text}>{contentText}</p>
          <Link
            href={`/${buttonUrl}`}
            className={contentButton === undefined ? 'hidden' : styles.content__button}>
            {contentButton}
          </Link>
        </div>
      </div>
    </div>
  );
};
