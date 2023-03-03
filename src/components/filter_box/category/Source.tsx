import React from 'react';
import { FButton } from 'components/filter_box/shared/FButton';
import { FInput } from 'components/filter_box/shared/FInput';
import { IButton } from 'components/filter_box/shared/IButton';
import styles from './categoryStyles.module.css';
export const Source = () => {
  const mockKeyWord = [
    'Facebook ',
    'Instagram',
    'Kakotalk',
    'Naver',
    'WhatsApp',
  ];
  return (
    <div className={styles.container}>
      <div className="category_tilte category_layout">소스</div>
      <div>
        <FInput />
        <FButton />
      </div>

      <div>
        {mockKeyWord.map((i, idx) => (
          <IButton key={idx} item={i} />
        ))}
      </div>
    </div>
  );
};
