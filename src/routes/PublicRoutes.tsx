import React from 'react';
import { Link, RouteObject, useRoutes } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout ';

const PublicRouters: React.FC = () => {
  return useRoutes([routes]);
};

const routes: RouteObject = {
  element: <PublicLayout />,
  children: [
    {
      path: '/',
      element: (
        <>
          <h2>Public page 🌐</h2>
          <Link to={'/protected'}>Go to Protected page</Link>
        </>
      ),
    },
  ],
};

export default PublicRouters;
