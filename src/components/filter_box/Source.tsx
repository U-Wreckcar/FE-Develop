import React from 'react';
import { FButton } from './shared/FButton';
import { FInput } from './shared/FInput';
import { IButton } from './shared/IButton';
import styles from './source.module.css';
export const Source = () => {
  const mockKeyWord = ['지금', '이순간', '중요'];
  return (
    <div className={styles.container}>
      <div className="category_tilte">소스</div>
      <div>
        <FInput />
        <FButton />
      </div>

      <div>
        {mockKeyWord.map((i) => (
          <IButton item={i} />
        ))}
      </div>
    </div>
  );
};
