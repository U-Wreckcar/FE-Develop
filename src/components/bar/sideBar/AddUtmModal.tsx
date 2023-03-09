import React from 'react';
import ReactModal from 'react-modal';

type ModalType = {
  isOpen: any;
  onRequestClose: any;
  style: any;
};

export const AddUtmModal: React.FC<ModalType> = ({
  isOpen,
  onRequestClose,
  style,
}) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} style={style}>
      <div>
        <h1>기존 UTM 추가</h1>
        <span>*기존의 UTM을 입력하면 파라미터 값이 분류됩니다</span>
      </div>
      <div>
        <input placeholder="*기존에 생성한 UTM 입력"></input>
        <div>
          <div>
            <p>생성 날짜</p>
            <input type="date"></input>
          </div>
          <div>
            <p>메모</p>
            <textarea placeholder="메모"></textarea>
          </div>
          <button onClick={onRequestClose}>추가하기</button>
        </div>
      </div>
    </ReactModal>
  );
};
