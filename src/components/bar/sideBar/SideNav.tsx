import React, { useState } from 'react';
import { PlusSideNav } from './PlusSideNav';
import { SlimSideNav } from './SlimSideNav';
import styles from './styles.module.css';

export const SideNav = () => {
  const [side, setSide] = useState(true);

  return (
    <div>
      {side ? (
        <PlusSideNav setSide={setSide} />
      ) : (
        <SlimSideNav setSide={setSide} />
      )}
    </div>
  );
};
