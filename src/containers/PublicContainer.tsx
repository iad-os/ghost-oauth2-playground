import { Public } from '@iad-os/react-ghost-auth';
import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicContainer: React.FC = () => {
  return (
    <Public>
      <Outlet />
    </Public>
  );
};

export default PublicContainer;
