import React from 'react';
import { Link, RouteObject, useRoutes } from 'react-router-dom';
import PublicContainer from '../containers/PublicContainer';
import { Typography } from '@mui/material';

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
          <Typography variant="h4">Public page 🌐</Typography>
          <Link to={'/protected'}>Go to Protected page</Link>
        </>
      ),
    },
  ],
};

export default PublicRouters;
