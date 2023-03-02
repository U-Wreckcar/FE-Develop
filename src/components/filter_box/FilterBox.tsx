import React from 'react';
import { CreateAt } from './CreateAt';
import { Source } from './Source';
import { Medium } from './Medium';
import { KeyWord } from './KeyWord';
import styles from './filterBox.module.css';
export default function FilterBox() {
  const cadsf = [<CreateAt />, <Source />, <Medium />, <KeyWord />];

  return (
    <div className={styles.container}>
      {cadsf.map((d) => {
        return (
          <div className={styles.list_item}>
            <div className="list_item">{d}</div>
          </div>
        );
      })}
      <input />
    </div>
  );
}
