import React from 'react';
import { MemoInput } from './MemoInput';
import { RequirInput } from './RequirInput';
import styles from './styles.module.css';
export const CreateInput = () => {
  const inputArray = [
    'url',
    'campaign_id',
    'source',
    'medium',
    'campaign_name',
    'campaign_key_word',
    'campaign_term',
    'memo',
  ];
  return (
    <div className={styles.container_create}>
      {inputArray.map((i, idx) => {
        if (
          i === 'url' ||
          i === 'source' ||
          i === 'medium' ||
          i === 'campaign_name'
        ) {
          return <RequirInput name={i} id={idx} key={idx} />;
        } else if (i === 'memo') {
          return <MemoInput name={i} key={idx} />;
        } else {
          return (
            <div key={idx}>
              <input id={`${i}`} placeholder={i} />
            </div>
          );
        }
      })}
    </div>
  );
};
