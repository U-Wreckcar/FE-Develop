import React, { useEffect, useState } from 'react';
import { KeyWordInput } from './key_word_search/KeyWordInput';
import { ModalInput } from './key_word_search/ModalInput';

export const KeyWord = () => {
  const [categoryValue, setCategoryValue] = useState('d');

  useEffect(() => {
    console.log(categoryValue);
  }, [categoryValue]);
  return (
    <div>
      <div className="category_tilte category_layout">키워드 검색</div>
      <ModalInput
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />

      <KeyWordInput />
    </div>
  );
};
