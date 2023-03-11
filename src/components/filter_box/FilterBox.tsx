import React from 'react';
import { CreateAt } from 'components/filter_box/category/CreateAt';
import { Source } from 'components/filter_box/category/Source';
import { Medium } from 'components/filter_box/category/Medium';
import { KeyWord } from 'components/filter_box/category/KeyWord';
// import styles from './styles.module.css';
import styles from './stylesTest.module.css';
import { useAppSelector } from 'util/reduxType/type';
export default function FilterBox() {
  const res = useAppSelector((state) => state.filter.tag);
  console.log(res);
  const cadsf = [<CreateAt />, <Source />, <Medium />, <KeyWord />];

  return (
    <div className={styles.container}>
      {cadsf.map((list, idx) => {
        return (
          <div key={idx} className={styles.list_item}>
            <div className="list_item">{list}</div>
          </div>
        );
      })}

      <div>{res?.create_st}</div>
      <div>{res?.utm_source}</div>
      <div>{res?.keyword_target}</div>
      {/* {res?.map((item, idx) => {
        if (item.utm_source) {
          const sourceMapValue = item.utm_source;
          return `소스 : ${sourceMapValue}`;
        } else if (item.date_scope) {
          return `생성 일자 :${item.date_scope}`;
        } else {
          return (
            <div key={idx}>
              <div className={styles.filter_tag}>{item.date_scope}</div>
              <div className={styles.filter_tag}>{item.utm_source}</div>
            </div>
          );
        }
      })} */}
    </div>
  );
}
