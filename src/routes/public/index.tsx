import { Typography } from '@mui/material';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/public/')({
  component: PublicIndexRouteComponent,
});

export function PublicIndexRouteComponent() {
  return (
    <>
      <Typography variant="h4">Public page 🌐</Typography>
      <Link to={'/private'}>Go to Protected page</Link>
    </>
  );
}
