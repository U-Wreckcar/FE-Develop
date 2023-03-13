import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import { AddUtmModal } from './AddUtmModal';
import { setSideProps } from './PlusSideNav';

/**
 * Image
 */
import menu from 'assets/menu.png';
import myutm from 'assets/myutm.png';
import addutm from 'assets/addutm.png';
import createutm from 'assets/createutm.png';
import help from 'assets/help.png';
import noti from 'assets/noti.png';
import guide from 'assets/guide.png';

export const SlimSideNav: React.FC<setSideProps> = ({ setSide, side }) => {
  const [modal, setModal] = useState(false);

  const location = useLocation();
  const pathName = location.pathname;
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
        <button
          className={styles.menu_button_style}
          onClick={() => setSide(true)}
        >
          <img
            className={styles.menu_button}
            src={menu}
            alt="Menu"
            onError={() => console.log('Image loading failed')}
          />
        </button>
      </div>
      <div className={styles.slim_category_box}>
        <div
          className={` ${
            pathName === '/main'
              ? styles.slim_active
              : styles.slim_utm_category_item
          } `}
        >
          <Link to="/main">
            <img
              src={myutm}
              alt="My-UTM"
              onError={() => console.log('Image loading failed')}
            />
          </Link>
        </div>
        <div
          className={` ${
            pathName === '/createutm'
              ? styles.slim_active
              : styles.slim_utm_category_item
          } `}
        >
          <Link to="/createutm">
            <img
              src={createutm}
              alt="Menu"
              onError={() => console.log('Image loading failed')}
            />
          </Link>
        </div>
        {/* <Link to="/userinfo">유저정보</Link> */}
        <div className={styles.utm_category_item}>
          <div onClick={() => setModal(!modal)}>
            <img
              src={addutm}
              alt="addutm"
              onError={() => console.log('Image loading failed')}
            />
          </div>
          <AddUtmModal
            isOpen={modal}
            onRequestClose={closeModal}
            style={customStyles}
          />
        </div>
      </div>

      <div className={styles.category_bottom_box}>
        <div className={styles.utm_category_item}>
          <img
            src={noti}
            alt="Noti Img"
            onError={() => console.log('Image loading failed')}
          />
        </div>
        <div className={styles.utm_category_item}>
          <img
            src={guide}
            alt="Guide Img"
            onError={() => console.log('Image loading failed')}
          />
        </div>
        <div className={styles.utm_category_item}>
          <img
            src={help}
            alt="Help Img"
            onError={() => console.log('Image loading failed')}
          />
        </div>
      </div>
    </div>
  );
};
