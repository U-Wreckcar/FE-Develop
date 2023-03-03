import { useRef } from 'react';
import { today } from 'redux/slice/filterSlice';
import { useAppDispatch } from 'util/hooks/selectorDispatch';
import { Calendar } from './calenda_components/Calendar';
import styles from './categoryStyles.module.css';
export const CreateAt = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <div className="category_tilte category_layout">
        생성일자
        <div className={styles.calendarBox}>
          <Calendar />
        </div>
      </div>
    </div>
  );
};
