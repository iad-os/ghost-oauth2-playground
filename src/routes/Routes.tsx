import { RouteObject, useRoutes } from 'react-router';
import { Navigate } from 'react-router-dom';
import RootContainer from '../containers/RootContainer';
import ProtectedRouters from './ProtectedRoutes';
import PublicRouters from './PublicRoutes';

const Routes = () => {
  return useRoutes([routes]);
};

const routes: RouteObject = {
  element: <RootContainer />,
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
