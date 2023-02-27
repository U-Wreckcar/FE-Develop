import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreatePage from '../pages/CreatePage';
import MainPage from '../pages/MainPage';
import RenderPage from '../pages/RenderPage';
import UserPage from '../pages/UserPage';
import NotFound from '../shared/page/NotFound';
import { SideNav } from '../components/bar/sideBar/SideNav';
import { Root } from './Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <RenderPage /> },
      { path: '/main', element: <MainPage /> },
      { path: '/createutm', element: <CreatePage /> },
      { path: '/userinfo', element: <UserPage /> },
    ],
  },

  {
    element: <UserPage />,
  },
]);
