import React from 'react';
import styles from 'styles.module.css';
type propsType = {
  name: string;
};
export const MemoInput: React.FC<propsType> = ({ name }) => {
  return (
    <div>
      <textarea placeholder={`${name}`}></textarea>
    </div>
  );
};
