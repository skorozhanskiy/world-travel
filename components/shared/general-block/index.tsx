import React from 'react';
import styles from './general-block.module.scss';
import Link from 'next/link';
interface Props {
  src?: string;
  alt?: string;
  pictureTitle?: string;
  contentTitle?: string;
  contentText?: string;
  contentButton?: string;
}

export const GeneralBlock: React.FC<Props> = ({
  src,
  alt,
  pictureTitle,
  contentTitle,
  contentText,
  contentButton,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.picture__wrapper}>
          <img className={styles.picture__img} src={src} alt={alt} />
          <div
            className={`${styles.picture__shadow} ${
              src === undefined ? 'hidden' : styles.picture__shadow
            }`}>
            <h3 className={styles.picture__title}>{pictureTitle}</h3>
          </div>
        </div>
        <div className={styles.content__wrapper}>
          <h1 className={styles.content__title}>{contentTitle}</h1>
          <p className={styles.content__text}>{contentText}</p>
          <Link
            href="/"
            className={contentButton === undefined ? 'hidden' : styles.content__button}>
            {contentButton}
          </Link>
        </div>
      </div>
    </div>
  );
};
