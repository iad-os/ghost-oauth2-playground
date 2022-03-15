import { RequireAuth } from '@iad-os/react-ghost-auth';
import React, { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router';
import Loadable from '../core/Loadable';
import MiniamlLayout from '../layouts/MinimalLayout';

const UserInfo = Loadable(lazy(() => import('../pages/UserInfo')));
const Credentials = Loadable(lazy(() => import('../pages/Credentials')));

const ProtectedRouters: React.FC = () => {
  return <RequireAuth>{useRoutes([routes])}</RequireAuth>;
};

const routes: RouteObject = {
  element: <MiniamlLayout />,
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
