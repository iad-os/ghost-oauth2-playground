import { RequireAuth } from '@iad-os/react-ghost-auth';
import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const ProtectedContainer = () => {
  return (
    <RequireAuth
      autologin
      loggedOut={
        <Typography variant="h4">🔐 Authentication required</Typography>
      }
    >
      <Outlet />
    </RequireAuth>
  );
};

export default ProtectedContainer;
