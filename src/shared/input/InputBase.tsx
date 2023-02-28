import React, { FormEvent } from 'react';
interface propsInput {
  styleName?: string;
  label?: string;
  submitFn?: (even: FormEvent) => void;
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
      <label>{label}</label>
      <input ref={inputRef} />
      {/* <button>생성버튼</button>
      <form onSubmit={submitFn}>
      </form> */}
    </>
  );
};
