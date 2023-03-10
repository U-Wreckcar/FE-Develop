import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const RenderHeader = () => {
  return (
    <nav className={styles.render_nav}>
      <div className={styles.render_nav_left}>
        <div className={styles.render_nav_left_img}></div>
        <div className={styles.render_nav_left_noti}>공지사항</div>
        <div className={styles.render_nav_left_guide}>가이드</div>
      </div>
      <div className={styles.user_box}>
        <p>로그인</p>
      </div>
    </nav>
  );
};
