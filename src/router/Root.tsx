import { Outlet } from 'react-router-dom';
import { SideNav } from 'components/bar/sideBar/SideNav';

export const Root = () => {
  return (
    <div>
      <SideNav />
      <Outlet />
    </div>
  );
};
