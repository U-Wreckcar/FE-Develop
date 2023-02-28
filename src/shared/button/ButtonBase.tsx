import React from 'react';

interface propsBtn {
  styleName?: string;
  label?: string;
  fnName?: () => void;
}
export const Button: React.FC<propsBtn> = ({ styleName, label, fnName }) => {
  return (
    <>
      <button className={styleName} onClick={fnName}>
        {label}
      </button>
    </>
  );
};
