import { Typography } from '@mui/material';
import { Link, RouteObject, useRoutes } from 'react-router-dom';
import PublicContainer from '../containers/PublicContainer';

const PublicRouters = () => {
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
