import { FormEvent, useRef } from 'react';
import { useAppSelector, useAppDispatch } from 'util/reduxType/type';

export const Calendar = () => {
  const startRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLInputElement>(null);

  const cenhandler = (event: FormEvent) => {
    event.preventDefault();
    const dateCel = `${startRef.current?.value}~${endRef.current?.value} `;
  };
  return (
    <form onSubmit={cenhandler}>
      <label htmlFor="start">
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
        <span> ~ </span>
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
      <button>✔️</button>
    </form>
  );
};
