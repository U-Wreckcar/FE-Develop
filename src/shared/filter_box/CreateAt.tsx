import { useRef } from 'react';
import { today } from 'redux/slice/filterSlice';
import { useAppDispatch } from 'util/hooks/selectorDispatch';
import { CalendarModal } from './CalendarModal';
import styles from 'shared/filter_box/createAt.module.css';
export const CreateAt = () => {
  const dataRef = useRef<HTMLInputElement>(null);
  const weekRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
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
    <div className={styles.container}>
      <div>생성일자</div>
      <div className={styles.calendarBox}>
        <CalendarModal />
      </div>
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
