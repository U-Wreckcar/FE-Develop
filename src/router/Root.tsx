import { Outlet } from 'react-router-dom';
import { SideNav } from 'components/bar/sideBar/SideNav';
import { useEffect, useState } from 'react';
import { Header } from 'components/bar/header/Header';
import { RenderHeader } from 'components/bar/header/RenderHeader';

export const Root = () => {
  const [state, setState] = useState(false);
  const path = window.location.pathname;

  useEffect(() => {
    if (
      window.location.pathname !== '/' &&
      window.location.pathname !== '/login'
    ) {
      setState(true);
    } else {
      setState(false);
    }
  }, [path]);
  return (
    <div>
      {state ? (
        <>
          <SideNav />
          <Header />
        </>
      ) : (
        <RenderHeader />
      )}
      <Outlet />
    </div>
  );
};
