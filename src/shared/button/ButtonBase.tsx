import React from 'react';

interface propsBtn {
  styleName?: string;
  label?: string;
  fnName?: (event: React.FormEvent) => void;
  onClickHadelr?: () => void;
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
