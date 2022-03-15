import { useAuthentication } from '@iad-os/react-ghost-auth';
import React from 'react';

const LogoutButton: React.FC = () => {
  const { logout } = useAuthentication();
  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
