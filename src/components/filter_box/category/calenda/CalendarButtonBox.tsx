import React, { SetStateAction, useRef, useState } from 'react';
import { addFilterItem } from 'redux/slice/filterSlice';
import { useAppDispatch, useAppSelector } from 'util/reduxType/type';
import styles from './calendarStyles.module.css';
type filterItem = {
  date_scope: string;
};
export const CalendarButtonBox = () => {
  const dispatch = useAppDispatch();
  const res = useAppSelector((state) => state);
  console.log(res);
  const dateRef = useRef<HTMLInputElement>(null);
  const weekRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const todayHandler = () => {
    const refValue: any = dateRef.current?.value;
    const disPatchData = {
      date_scope: refValue,
    };
    dispatch(addFilterItem(disPatchData));
    // setAddDate('');
  };
  // const weekHandler = () => {
  //   dispatch(addFilterItem(weekRef.current?.value));
  // };
  // const monthHandler = () => {
  //   dispatch(addFilterItem(monthRef.current?.value));
  // };
  return (
    <div>
      <div className={styles.buttonBox}>
        <input
          datatype="today"
          type="button"
          ref={dateRef}
          value="오늘"
          onClick={todayHandler}
        />
        <input
          datatype="today"
          type="button"
          ref={weekRef}
          value="1주일"
          // onClick={weekHandler}
        />
        <input datatype="today" type="button" ref={monthRef} value="1개월" />
        <input datatype="today" type="button" ref={monthRef} value="3개월" />
      </div>
    </div>
  );
};
