import { RequireAuth } from '@iad-os/react-ghost-auth';
import React from 'react';
import { Outlet } from 'react-router-dom';

const ProtectedContainer: React.FC = () => {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  );
};

export default ProtectedContainer;
