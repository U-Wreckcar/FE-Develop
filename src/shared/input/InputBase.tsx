import React from 'react';
interface propsInput {
  styleName?: string;
  label?: string;
  fnName?: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export const InputBase: React.FC<propsInput> = ({
  styleName,
  label,
  inputRef,
  fnName,
}) => {
  return (
    <form>
      <label>{label}</label>
      <input ref={inputRef} />
    </form>
  );
};
