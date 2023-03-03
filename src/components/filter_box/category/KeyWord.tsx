import React from 'react';
import { KeyWordInput } from './key_word_search/KeyWordInput';
import { SelecteInput } from './key_word_search/SelecteInput';
import styles from './categoryStyles.module.css';

export const KeyWord = () => {
  return (
    <div className={styles.container}>
      <div className="category_tilte">키워드 검색</div>
      <div className={styles.container}>
        <SelecteInput />
        <KeyWordInput />
      </div>
    </div>
  );
};
