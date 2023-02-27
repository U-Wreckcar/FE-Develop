import { Outlet } from 'react-router-dom';
import { SideNav } from 'components/bar/sideBar/SideNav';
import { useEffect, useState } from 'react';

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
      <Outlet />
    </div>
  );
};
