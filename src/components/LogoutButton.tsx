import { useAuthentication } from '@iad-os/react-ghost-auth';
import React from 'react';

function LogoutButton() {
  const { logout } = useAuthentication();
  return <button onClick={logout}>Logout</button>;
}

export default LogoutButton;
