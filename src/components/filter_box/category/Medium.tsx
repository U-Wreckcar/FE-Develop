import React from 'react';
import { FButton } from '../elem/FButton';
import { IButton } from '../elem/IButton';
import { FInput } from '../elem/FInput';
import styles from './categoryStyles.module.css';
export const Medium = () => {
  const mockKeyWord = [
    'Website(“referral”) ',
    'Banner',
    'Directory Tiles',
    'Email',
    'Snippet',
  ];
  return (
    <div className={styles.container}>
      <div className="category_tilte category_layout">미디움</div>
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
