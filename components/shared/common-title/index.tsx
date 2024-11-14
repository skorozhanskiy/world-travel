import React from 'react';

import styles from './common-title.module.scss';

interface Props {
  titleName?: string;
}

export const CommonTitle: React.FC<Props> = ({ titleName }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{titleName}</h1>
    </div>
  );
};
