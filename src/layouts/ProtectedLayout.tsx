import { RequireAuth } from '@iad-os/react-ghost-auth';
import React from 'react';
import { Outlet } from 'react-router-dom';

const ProtectedLayout: React.FC = () => {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  );
};

export default ProtectedLayout;
