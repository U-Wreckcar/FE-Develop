import React from 'react';

import styles from './categoryStyles.module.css';
export const Medium = () => {
  const mockKeyWord = [
    'Website(“referral”) ',
    'Banner',
    'Directory Tiles',
    'Email',
    'Snippet',
  ];
  return (
    <div className={styles.container}>
      <div className="category_tilte category_layout">미디움</div>
      <div>
        <input />
        <button>버튼</button>
      </div>

      <div>
        {mockKeyWord.map((i, idx) => (
          <div key={idx}>
            <button>{i}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
