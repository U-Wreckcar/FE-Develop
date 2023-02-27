import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from '../components/bar/sideBar/SideNav';

interface sideBarProp {
  isSideBar: boolean;
}

export const Root = () => {
  return (
    <div>
      <SideNav />
      <Outlet />
    </div>
  );
};
