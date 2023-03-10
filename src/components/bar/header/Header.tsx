import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <h3>오늘 하루도 유렉카와 함께 효율적인 업무를 진행하세요.</h3>
      </div>
      <div className={styles.user_box}>
        <div className={styles.user_img}></div>
        <p>
          <span className={styles.bold_text}>유렉카</span>님
        </p>
      </div>
    </nav>
  );
};
