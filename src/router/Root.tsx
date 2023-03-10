import { Outlet } from 'react-router-dom';
import { SideNav } from 'components/bar/sideBar/SideNav';
import { useEffect, useState } from 'react';
import { Header } from 'components/bar/header/Header';

export const Root = () => {
  const [state, setState] = useState(false);
  const path = window.location.pathname;

  useEffect(() => {
    if (window.location.pathname !== '/') {
      setState(true);
    } else {
      setState(false);
    }
  }, [path]);
  return (
    <div>
      {state && <SideNav />}
      <Header />
      <Outlet />
    </div>
  );
};
