import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styles from './style.module.css';

interface propsType {
  setCategoryValue: Dispatch<SetStateAction<string>>;
  categoryValue: string;
}

export const Modal: React.FC<propsType> = ({
  setCategoryValue,
  categoryValue,
}) => {
  const itemArray = [
    'URL',
    '캠페인 ID',
    '캠페인 이름',
    '캠페인 텀',
    '캠페인 콘텐츠',
    '메모',
  ];
  const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // e.target.checked ?
    console.log(e.target.checked);
    console.log(e);
    setCategoryValue(e.target.attributes[0].value);
    console.log(e.target.attributes[0].value);
  };
  return (
    <div>
      <div>
        {itemArray.map((i, idx) => {
          return (
            <div key={idx}>
              <div className={styles.search_item_box}>
                <label htmlFor={i}>
                  <input id={i} type="checkbox" onChange={checkHandler} />
                  {i}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
