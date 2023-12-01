import { Typography } from '@mui/material';
import { lazy } from 'react';
import { RouteObject, useRoutes } from 'react-router';
import { Link } from 'react-router-dom';
import ProtectedContainer from '../containers/ProtectedContainer';
import Loadable from '../core/Loadable';

const UserInfo = Loadable(lazy(() => import('../pages/UserInfo')));

const ProtectedRouters = () => {
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
