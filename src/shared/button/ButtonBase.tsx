import React from 'react';

interface propsBtn {
  styleName?: string;
  label?: string;
  fnName?: () => void;
}
export const ButtonBase: React.FC<propsBtn> = ({
  styleName,
  label,
  fnName,
}) => {
  return (
    <>
      <button className={styleName} onClick={fnName}>
        {label}
      </button>
    </>
  );
};
