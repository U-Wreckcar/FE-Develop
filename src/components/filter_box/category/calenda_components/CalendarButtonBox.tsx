import React, { useRef } from 'react';
import { useAppDispatch } from 'util/hooks/selectorDispatch';
import { today } from 'redux/slice/filterSlice';
import styles from './calendarStyles.module.css';
export const CalendarButtonBox = () => {
  const dispatch = useAppDispatch();
  const dataRef = useRef<HTMLInputElement>(null);
  const weekRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const todayHandler = () => {
    dispatch(today(dataRef.current?.value));
  };
  const weekHandler = () => {
    dispatch(today(weekRef.current?.value));
  };
  const monthHandler = () => {
    dispatch(today(monthRef.current?.value));
  };
  return (
    <div>
      <div className={styles.buttonBox}>
        <input
          datatype="today"
          type="button"
          ref={dataRef}
          value="오늘"
          onClick={todayHandler}
        />
        <input
          datatype="today"
          type="button"
          ref={weekRef}
          value="1주일"
          onClick={weekHandler}
        />
        <input
          datatype="today"
          type="button"
          ref={monthRef}
          value="1개월"
          onClick={monthHandler}
        />
        <input
          datatype="today"
          type="button"
          ref={monthRef}
          value="3개월"
          onClick={monthHandler}
        />
      </div>
    </div>
  );
};
