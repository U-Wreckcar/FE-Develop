import React, { useEffect, useRef, useState } from 'react';
import { CreateCategory } from './create_input_components/CreateCategory';
import { InputItem } from './InputItem';
import styles from './styles.module.css';
type listType = {
  id?: any;
  item: any;
};
export const CreateUtm = () => {
  const [list, setList] = useState<listType[]>([
    { id: 1, item: <InputItem /> },
  ]);
  const boxRef = useRef<number>(2);
  const delRef = useRef<HTMLDivElement>(null);
  const addList = () => {
    const newList = {
      id: boxRef.current,
      item: <InputItem />,
    };
    boxRef.current += 1;
    console.log(boxRef.current);
    setList([...list, newList]);
  };
  const delList = () => {
    console.log(delRef.current?.textContent?.split('-')[0]);
    const gobhagi: any = delRef.current?.textContent?.split('-')[0];
    const finish = gobhagi * 1;
    setList(list.filter((i) => i.id != finish));
  };
  console.log(list);
  return (
    <div className={styles.section}>
      <div>
        <h1 className={styles.title}>UTM 생성하기</h1>
        <h5>문구입력부분? 어떤 데이터?</h5>
        <CreateCategory />

        {list.map((i) => {
          return (
            <div ref={delRef} key={i.id}>
              <div>
                {i.id}
                {i.item}
              </div>
              <button onClick={delList}>-</button>
            </div>
          );
        })}
        {/* <InputLit /> */}
        <button>생성하기</button>
        <button onClick={addList}>+</button>
      </div>
    </div>
  );
};
