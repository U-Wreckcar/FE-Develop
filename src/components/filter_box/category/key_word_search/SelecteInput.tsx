import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styles from './style.module.css';

export const SelecteInput = () => {
  const checkHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <select onChange={checkHandler}>
        <option value={'default'}>키워드를 선택해 주세요</option>
        <option value={'URL'}>URL</option>
        <option value={'캠페인 ID'}>캠페인 ID</option>
        <option value={'캠페인 이름'}>캠페인 이름</option>
        <option value={'캠페인 텀'}>캠페인 텀</option>
        <option value={'메모'}>메모</option>
      </select>
    </div>
  );
};
