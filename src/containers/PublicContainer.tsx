import { Public } from '@iad-os/react-ghost-auth';
import { Outlet } from 'react-router-dom';

const PublicContainer = () => {
  return (
    <Public>
      <Outlet />
    </Public>
  );
};

export default PublicContainer;
