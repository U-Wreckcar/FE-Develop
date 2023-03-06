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
          return <RequirInput name={i} key={idx} />;
        } else if (i === 'memo') {
          return <MemoInput name={i} key={idx} />;
        } else {
          return (
            <div key={idx}>
              <input id={`${i}`} placeholder={i} />
            </div>
          );
        }
        // switch (i) {
        //   case 'url':
        //     return <RequirInput />;
        //   case 'source':
        //     return <RequirInput />;
        //   case 'medium':
        //     return <RequirInput />;
        //   case 'campaign_name':
        //     return <RequirInput />;
        //   case 'memo':
        //     return <MemoInput />;
        // }
      })}
    </div>
  );
};

// 조건인풋 React form
// I 가 url이라면? React form
// 그럼 인풋 컴포넌트가 따로 있어야겟네?
// 컴포넌트 폴더

// 1. 조건인풋 컴포넌트
// 2. 메모 컴포넌트
// 3. MAP으로 뿌려지는 컴포넌트 ( 조건 메모 널인풋들 다 포함)
// 그리고 여기 컴포넌트로 싹불러오기 여기서 플라스버튼으로 추가 가능하게 5개만!

// 필요한기능
// 1. 마이너스 버튼 (3번 컴포넌트에서 만들기)
// 2. 플라스 버튼
// 3.생성하기 버튼 그리고 동시에 utm 단축기능 넣기
