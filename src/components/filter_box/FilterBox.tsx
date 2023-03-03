import React, { useEffect } from 'react';
import { CreateAt } from './CreateAt';
import { Source } from './Source';
import { Medium } from './Medium';
import { KeyWord } from './KeyWord';
import styles from './filterBox.module.css';
import axios from 'axios';

export default function FilterBox() {
  const cadsf = [<CreateAt />, <Source />, <Medium />, <KeyWord />];

  const getCode = async () => {
    if (window.location.search !== '') {
      const code = window.location.search.split('?code=')[1];
      await axios.get(
        `https://dee8-14-6-160-238.jp.ngrok.io/auth/kakao/callback?code=${code}`
      );
    }
  };

  useEffect(() => {
    getCode();
  }, []);
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
