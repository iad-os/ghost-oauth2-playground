import { useAuthentication } from '@iad-os/react-ghost-auth';
import React from 'react';
import MonacoEditor from '../components/MonacoEditor';

const UserInfo = () => {
  const { userInfo } = useAuthentication();

  return (
    <>
      <span>
        <h2>User info </h2>
      </span>
      <MonacoEditor
        height="40vh"
        language="json"
        value={JSON.stringify(userInfo(), null, 2)}
      />
    </>
  );
};

export default UserInfo;
