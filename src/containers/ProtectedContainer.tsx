import { RequireAuth } from '@iad-os/react-ghost-auth';
import { Outlet } from 'react-router-dom';

const ProtectedContainer = () => {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  );
};

export default ProtectedContainer;
