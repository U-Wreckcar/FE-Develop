import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { AddUtmModal } from './AddUtmModal';

export type setSideProps = {
  setSide: Dispatch<SetStateAction<boolean>>;
  side: boolean;
};

export const PlusSideNav: React.FC<setSideProps> = ({ setSide, side }) => {
  const [modal, setModal] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className={styles.plus_container}>
      <div>
        <div>
          <img></img>
          <button onClick={() => setSide(false)}>←</button>
        </div>
        <div className={styles.title}></div>
        {/* <Link to="/">HOME</Link> */}
        {/* <Link to="/main">utm 관리</Link> */}
        <div>
          <Link to="/createutm">새 UTM 생성하기</Link>
        </div>
        {/* <Link to="/userinfo">유저정보</Link> */}
        <div>
          <p onClick={() => setModal(!modal)}>기존 UTM 추가하기</p>
          <AddUtmModal
            isOpen={modal}
            onRequestClose={closeModal}
            style={customStyles}
          />
        </div>
        <div>
          <Link to="/main"> UTM 관리하기</Link>
        </div>
      </div>
      <div>
        <h4>유렉카</h4>
        <ul>
          <li>공지사항</li>
          <li>가이드</li>
          <li>문의하기</li>
        </ul>
      </div>
    </div>
  );
};
