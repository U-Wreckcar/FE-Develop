import React from 'react';
import styles from './stsidenav.module.css';
import { Link } from 'react-router-dom';
export const SideNav = () => {
  return (
    <nav>
      <div className={styles.title}></div>
      <Link to="/">HOME</Link>
      <Link to="/main">utm 관리</Link>
      <Link to="/createutm">utm 생성하기</Link>
      <Link to="/userinfo">유저정보</Link>
    </nav>
  );
};
