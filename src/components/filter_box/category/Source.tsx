import { FormEvent, useRef } from 'react';
import { addFilterItem, setAddFilterItem } from 'redux/slice/filterSlice';
import { useAppDispatch } from 'util/reduxType/type';
import styles from './categoryStyles.module.css';
export const Source = () => {
  const dispatch = useAppDispatch();
  const sourceRef = useRef<HTMLInputElement>(null);
  const sourceBtnRef = useRef<HTMLButtonElement>(null);

  const mockKeyWord = [
    'Facebook ',
    'Instagram',
    'Kakotalk',
    'Naver',
    'WhatsApp',
  ];
  const keyWordHandler = (e: FormEvent) => {
    e.preventDefault();
    const refValue = sourceRef.current?.value;
    console.log(refValue);
  };
  const sourceBtn = (e: any) => {
    const btnValue = e.target?.value;
    const dispatchValue: any = {
      utm_source: btnValue,
    };
    dispatch(setAddFilterItem(dispatchValue));
    // dispatch(addFilterItem(dispatchValue));
  };
  return (
    <div className={styles.container}>
      <form onSubmit={keyWordHandler}>
        <div className="category_tilte category_layout">소스</div>
        <div>
          <input type="text" ref={sourceRef} />
          <button>확인</button>
        </div>
      </form>

      <div>
        {mockKeyWord.map((i, idx) => (
          <div key={idx}>
            <input
              type="button"
              name={`${idx}`}
              value={i}
              onClick={sourceBtn}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
