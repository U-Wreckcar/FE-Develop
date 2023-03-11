import React, { useState } from 'react';

type propsType = {
  setIsCancle: boolean;
};

export const Modal = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = () => {
    console.log('야');
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <>
      <dialog {...(isOpen && true ? { open: true } : {})} id="favDialog">
        <form method="dialog">
          <button value="cancel" onClick={modalHandler}>
            취소
          </button>
          <button id="confirmBtn" value="default" onClick={modalHandler}>
            확인
          </button>
        </form>
      </dialog>

      <button id="updateDetails" onClick={modalHandler}>
        상세정보 df
      </button>

      <output aria-live="polite"></output>
    </>
  );
};
