import React from 'react';

type CopyButtonProps = {
  style: string;
  text: string;
};

export const CopyButton: React.FC<CopyButtonProps> = ({ style, text }) => {
  const onClickCopyBtn = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert('클립보드에 복사되었습니다.');
        })
        .catch(() => {
          alert('복사를 다시 시도해주세요.');
        });
    }
  };
  return (
    <button className={style} onClick={onClickCopyBtn}>
      CopyButton
    </button>
  );
};
