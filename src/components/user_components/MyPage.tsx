import React from 'react';
import { MyPageBox } from './MyPageBox';

export const MyPage = () => {
  return (
    <div>
      <div>
        <h1>개인정보 관리</h1>
        <span>30분 전에 생성됐어요!</span>
      </div>
      <MyPageBox />
    </div>
  );
};
