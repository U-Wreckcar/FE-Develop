import { Calendar } from './calenda/Calendar';
import { CalendarButtonBox } from './calenda/CalendarButtonBox';
// import styles from './categoryStyles.module.css';
export const CreateAt = () => {
  // const dispatch = useAppDispatch();

  return (
    <div>
      <div className="category_tilte">생성일자</div>
      <div>
        <Calendar />
        <CalendarButtonBox />
      </div>
    </div>
  );
};
