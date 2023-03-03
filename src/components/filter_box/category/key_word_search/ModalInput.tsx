import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { Modal } from './Modal';

interface propsType {
  setCategoryValue: Dispatch<SetStateAction<string>>;
  categoryValue: string;
}

export const ModalInput: React.FC<propsType> = ({
  setCategoryValue,
  categoryValue,
}) => {
  const categorySelectRef = useRef<HTMLInputElement>(null);
  const reduxMockArr = { memo: '메모' };
  const handler = () => {
    const categoryValue = categorySelectRef.current?.value;
    console.log(categoryValue);
  };
  useEffect(() => {
    console.log(categoryValue);
  }, [categoryValue]);
  return (
    <div>
      <input type="text" placeholder={categoryValue} />
      {categoryValue}
      <button>⬇️</button>
      <Modal
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />
    </div>
  );
};
