import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { AddUtmModal } from './AddUtmModal';
import { setSideProps } from './PlusSideNav';

export const SlimSideNav: React.FC<setSideProps> = ({ setSide, side }) => {
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
    <div className={styles.slim_container}>
      <div>
        <div>
          <img></img>
          <button onClick={() => setSide(true)}>→</button>
        </div>
        <div className={styles.title}></div>
        {/* <Link to="/">HOME</Link> */}
        {/* <Link to="/main">utm 관리</Link> */}
        <div>
          <Link to="/createutm">[+]</Link>
        </div>
        {/* <Link to="/userinfo">유저정보</Link> */}
        <div>
          <p onClick={() => setModal(!modal)}>+</p>
          <AddUtmModal
            isOpen={modal}
            onRequestClose={closeModal}
            style={customStyles}
          />
        </div>
        <div>
          <Link to="/main">[]</Link>
        </div>
      </div>
      <div>
        <ul>
          <li>!</li>
          <li>?</li>
          <li>??</li>
        </ul>
      </div>
    </div>
  );
};
