import React from 'react';
import { CreateAt } from 'components/filter_box/category/CreateAt';
import { Source } from 'components/filter_box/category/Source';
import { Medium } from 'components/filter_box/category/Medium';
import { KeyWord } from 'components/filter_box/category/KeyWord';
import styles from './styles.module.css';
export default function FilterBox() {
  const cadsf = [<CreateAt />, <Source />, <Medium />, <KeyWord />];

  return (
    <div className={styles.container}>
      {cadsf.map((list, idx) => {
        return (
          <div key={idx} className={styles.list_item}>
            <div className="list_item">{list}</div>
          </div>
        );
      })}
    </div>
  );
}
