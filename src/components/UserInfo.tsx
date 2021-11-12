import { useAuthentication } from '@iad-os/react-ghost-auth';
import React from 'react';

const UserInfo: React.FunctionComponent = () => {
  const { userInfo } = useAuthentication();
  return <pre>{JSON.stringify(userInfo(), null, 2)}</pre>;
};

export default UserInfo;
