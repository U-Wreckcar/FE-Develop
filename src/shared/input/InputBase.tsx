import React, { FormEvent } from 'react';
interface propsInput {
  styleName?: string;
  label?: string;
  submitFn?: (event: React.FormEvent) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export const InputBase: React.FC<propsInput> = ({
  styleName,
  label,
  inputRef,
  submitFn,
}) => {
  return (
    <>
      <form onSubmit={submitFn}>
        <label>{label}</label>
        <input ref={inputRef} />
        {/* {/* <button>생성버튼</button> */}
      </form>
    </>
  );
};
