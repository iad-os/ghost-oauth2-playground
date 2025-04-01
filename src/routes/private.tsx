import { RequireAuth } from '@iad-os/react-ghost-auth';
import { Typography } from '@mui/material';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/private')({
  component: RouteComponent,
});

function RouteComponent() {
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
}
