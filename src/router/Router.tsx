import { createBrowserRouter } from 'react-router-dom';
import CreatePage from 'pages/CreatePage';
import MainPage from 'pages/MainPage';
import RenderPage from 'pages/RenderPage';
import UserPage from 'pages/UserPage';
import NotFound from 'shared/page/NotFound';
import { Root } from './Root';
import LoginPage from 'pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <RenderPage /> },
      { path: '/main', element: <MainPage /> },
      { path: '/main/:mainid', element: <MainPage /> },
      { path: '/createutm', element: <CreatePage /> },
      { path: '/userinfo', element: <UserPage /> },
      { path: '/login', element: <LoginPage /> },
    ],
  },
]);
