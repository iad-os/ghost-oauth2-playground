import React, { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router';
import Loadable from '../core/Loadable';
import ProtectedContainer from '../containers/ProtectedContainer';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const UserInfo = Loadable(lazy(() => import('../pages/UserInfo')));

const ProtectedRouters: React.FC = () => {
  return useRoutes([routes]);
};

const routes: RouteObject = {
  element: <ProtectedContainer />,
  children: [
    {
      path: '/',
      element: (
        <>
          <Typography variant="h4">Protected page 🔐</Typography>
          <Link to={'/public'}>Go to Public page</Link>
        </>
      ),
    },
    {
      path: '/users',
      element: <UserInfo />,
    },
  ],
};

export default ProtectedRouters;
