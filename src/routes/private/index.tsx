import { Typography } from '@mui/material';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/private/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Typography variant="h4">Protected page 🔐</Typography>
      <Link to={'/public'}>Go to Public page</Link>
    </>
  );
}
