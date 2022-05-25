import { useAuthentication } from '@iad-os/react-ghost-auth';
import React from 'react';
import { RouteObject, useRoutes } from 'react-router';
import { Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProtectedRouters from './ProtectedRoutes';
import PublicRouters from './PublicRoutes';

const Routes: React.FC = () => {
  const { status } = useAuthentication();
  console.log(status);

  return useRoutes([routes]);
};

const routes: RouteObject = {
  element: <MainLayout />,
  children: [
    {
      path: '/protected/*',
      element: <ProtectedRouters />,
    },
    {
      path: '/public/*',
      element: <PublicRouters />,
    },
    {
      path: '/',
      element: <Navigate to="/public" />,
    },
    {
      path: '/*',
      element: <h2>⚠ OOPS... Page not found! ⚠</h2>,
    },
  ],
};

export default Routes;
