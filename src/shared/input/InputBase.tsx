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
    <form onSubmit={submitFn}>
      <label>{label}</label>
      <input ref={inputRef} />
    </form>
  );
};
