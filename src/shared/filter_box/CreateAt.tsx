import { useRef } from 'react';
import { today } from 'redux/slice/filterSlice';
import { useAppSelector, useAppDispatch } from 'util/hooks/redux_hook/hook';
// interface dateType {
//   for: string;
// }
export const CreateAt = () => {
  //   console.log(res);
  const todayHandler = () => {
    const todayDate = new Date().toString();
    //   dispatch(today(todayDate));
  };

  return (
    <div>
      <button onClick={todayHandler}>오늘</button>
    </div>
  );
};
