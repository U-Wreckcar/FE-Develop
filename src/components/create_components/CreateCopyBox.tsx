import React from 'react';
import { mapDefined } from 'tslint/lib/utils';
import styles from './styles.module.css';
export const CreateCopyBox = () => {
  const arr = [
    {
      full: 'https://shop.com.kehop.com.kehop.com.ke',
      short: 'https://shop.com.ke',
    },
    {
      full: 'https://shop.com.kehop.com.kehop.com.ke',
      short: 'https://shop.com.ke',
    },
    {
      full: 'https://shop.com.kehop.com.kehop.com.ke',
      short: 'https://shop.com.ke',
    },
  ];
  return (
    <div className={styles.container_category}>
      <div className={styles.copy_title}>
        <h3 className={styles.utm_url}>UTM URL</h3>
        <h3 className={styles.utm_shorten_url}>Shorten URL</h3>
      </div>
      <div>
        {arr.map((i, idx) => (
          <div key={idx}>
            <div className={styles.itemBox}>
              <div>
                <div className={styles.full_utm}>{i.full}</div>
              </div>
              <div>
                <div className={styles.short_utm}>{i.short}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
