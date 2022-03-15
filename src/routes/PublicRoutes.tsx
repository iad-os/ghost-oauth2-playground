import { Public } from '@iad-os/react-ghost-auth';
import React from 'react';
import { Link, RouteObject, useRoutes } from 'react-router-dom';
import MiniamlLayout from '../layouts/MinimalLayout';

const PublicRouters: React.FC = () => {
  return <Public>{useRoutes([routes])}</Public>;
};

const routes: RouteObject = {
  element: <MiniamlLayout />,
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
