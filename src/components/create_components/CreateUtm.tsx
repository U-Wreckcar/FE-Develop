import React, { useEffect } from 'react';
import { CreateCategory } from './create_input_components/CreateCategory';

import { InputList } from './InputList';

import styles from './styles.module.css';
export const CreateUtm = () => {
  return (
    <div className={styles.section}>
      <div>
        <h1 className={styles.title}>UTM 생성하기</h1>
        <h5>문구입력부분? 어떤 데이터?</h5>
        <CreateCategory />
        <InputList />
      </div>
    </div>
  );
};
