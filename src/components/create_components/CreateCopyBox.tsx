import React from 'react';
import { CopyButton } from 'shared/button/CopyButton';
import styles from './styles.module.css';
import b_link from 'assets/b_link.png';
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
    <div className={styles.container_copy_box}>
      <div className={styles.copy_title}>
        <h3 className={styles.utm_url}>
          <img src={b_link} alt="링크" /> UTM URL
        </h3>
        <h3 className={styles.utm_shorten_url}>
          <img src={b_link} alt="링크" />
          Shorten URL
        </h3>
      </div>
      <div>
        {arr.map((i, idx) => (
          <div key={idx}>
            <div className={styles.list_box}>
              <div className={styles.full_box}>
                <div className={styles.copy_box_full}>
                  <div>{idx}</div>
                  <div className={styles.full_utm}>{i.full}</div>
                  <CopyButton text={i.full} />
                </div>
              </div>
              <div className={styles.short_box}>
                <div className={styles.copy_box_short}>
                  <div className={styles.short_utm}>{i.short}</div>
                  <CopyButton text={i.short} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
