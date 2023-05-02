import React from 'react';
import { Link, RouteObject, useRoutes } from 'react-router-dom';
import PublicContainer from '../containers/PublicContainer';

const PublicRouters: React.FC = () => {
  return useRoutes([routes]);
};

const routes: RouteObject = {
  element: <PublicContainer />,
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
