import { FormEvent, useRef } from 'react';
import { useAppSelector, useAppDispatch } from 'util/hooks/redux_hook/hook';
import { today } from 'redux/slice/filterSlice';

export const CalendarModal = () => {
  const res = useAppSelector((state) => state.filter.dateHist);
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const cenhandler = (event: FormEvent) => {
    event.preventDefault();
    const dateCel = `${startRef.current?.value}~${endRef.current?.value} `;
    console.log(startRef.current?.value);
    console.log(endRef.current?.value);
    dispatch(today(dateCel));
  };
  return (
    <form onSubmit={cenhandler}>
      <label htmlFor="start">
        Start
        <input
          ref={startRef}
          type="date"
          id="start"
          name="trip-start"
          min="2023-05-05"
          max="2024-12-31"
        />
      </label>
      <label htmlFor="end">
        End
        <input
          ref={endRef}
          type="date"
          id="end"
          name="trip-end"
          required
          min="2023-05-05"
          max="2024-12-31"
        />
      </label>
      <button>Dispatch</button>
      <p>{res}</p>
    </form>
  );
};
