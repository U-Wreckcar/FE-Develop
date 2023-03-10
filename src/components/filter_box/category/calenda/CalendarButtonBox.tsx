import React, { SetStateAction, useRef, useState } from 'react';
import { addFilterItem } from 'redux/slice/filterSlice';
import { useAppDispatch, useAppSelector } from 'util/reduxType/type';
import styles from './calendarStyles.module.css';
// type filterItem = {
//   date_scope: string;
// };
export const CalendarButtonBox = () => {
  const dispatch = useAppDispatch();
  const res = useAppSelector((state) => state);
  console.log(res);
  const dateRef = useRef<HTMLInputElement>(null);
  const weekRef = useRef<HTMLInputElement>(null);
  const oneMonthRef = useRef<HTMLInputElement>(null);
  const threeMonthRef = useRef<HTMLInputElement>(null);
  const todayHandler = () => {
    const refValue: any = dateRef.current?.value;
    const disPatchData = {
      date_scope: refValue,
    };
    dispatch(addFilterItem(disPatchData));
  };
  const weekHandler = () => {
    const refValue: any = weekRef.current?.value;
    const disPatchData = {
      date_scope: refValue,
    };
    dispatch(addFilterItem(disPatchData));
  };
  const oneMonthHandler = () => {
    const refValue: any = oneMonthRef.current?.value;
    const disPatchData = {
      date_scope: refValue,
    };
    dispatch(addFilterItem(disPatchData));
  };
  const threeMonthHandler = () => {
    const refValue: any = threeMonthRef.current?.value;
    const disPatchData = {
      date_scope: refValue,
    };
    dispatch(addFilterItem(disPatchData));
  };
  return (
    <div>
      <div className={styles.buttonBox}>
        <input
          type="button"
          ref={dateRef}
          value="오늘"
          onClick={todayHandler}
        />
        <input
          type="button"
          ref={weekRef}
          value="1주일"
          onClick={weekHandler}
        />
        <input
          type="button"
          ref={oneMonthRef}
          value="1개월"
          onClick={oneMonthHandler}
        />
        <input
          type="button"
          ref={threeMonthRef}
          value="3개월"
          onClick={threeMonthHandler}
        />
      </div>
    </div>
  );
};
