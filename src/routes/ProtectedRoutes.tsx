import React, { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router';
import Loadable from '../core/Loadable';
import ProtectedLayout from '../layouts/ProtectedLayout';

const UserInfo = Loadable(lazy(() => import('../pages/UserInfo')));
const Credentials = Loadable(lazy(() => import('../pages/Credentials')));

const ProtectedRouters: React.FC = () => {
  return useRoutes([routes]);
};

const routes: RouteObject = {
  element: <ProtectedLayout />,
  children: [
    {
      path: '/',
      element: <Credentials />,
    },
    {
      path: '/users',
      element: <UserInfo />,
    },
  ],
};

export default ProtectedRouters;
