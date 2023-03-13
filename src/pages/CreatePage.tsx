import React from 'react';
import { CreateUtm } from 'components/create_components/CreateUtm';
import { CreateCategory } from 'components/create_components/CreateCategory';
import { CreateCopyBox } from 'components/create_components/CreateCopyBox';
import styles from './styles.module.css';
export default function CreatePage() {
  return (
    <div className={styles.create_container}>
      <h1>새 UTM 생성하기</h1>
      <span className="category_text">
        UTM은 최대 5개까지 생성할 수 있습니다.
      </span>
      <CreateCategory />
      <CreateUtm />
      <CreateCopyBox />
    </div>
  );
}
