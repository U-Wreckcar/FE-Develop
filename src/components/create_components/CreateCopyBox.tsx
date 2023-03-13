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
        <div className={styles.link_img_box}>
          <img className={styles.link_img} src={b_link} alt="링크" />
        </div>
        <h3 className={styles.utm_url}>UTM URL</h3>
        <div className={styles.link_img_box}>
          <img className={styles.link_img} src={b_link} alt="링크" />
        </div>
        <h3 className={styles.utm_shorten_url}>Shorten URL</h3>
      </div>
      <div>
        {arr.map((i, idx) => (
          <div key={idx}>
            <div className={styles.list_box}>
              <div className={styles.copy_box_number}>{idx + 1}</div>
              <div className={styles.full_box}>
                <div className={styles.copy_box_full}>
                  <div className={styles.full_utm}>
                    <div className={styles.text_full}>{i.full}</div>
                  </div>
                  <CopyButton text={i.full} />
                </div>
              </div>
              <div className={styles.short_box}>
                <div className={styles.copy_box_short}>
                  <div className={styles.short_utm}>
                    <div className={styles.text_full}>{i.short}</div>
                  </div>
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
