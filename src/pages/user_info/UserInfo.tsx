import { useAuthentication } from '@iad-os/react-ghost-auth';
import { Container } from '@mui/material';
import React from 'react';
import MonacoEditor from '../../components/MonacoEditor';

function UserInfo() {
  const { userInfo } = useAuthentication();

  return (
    <Container fixed>
      <span>
        <h2>👻 User info </h2>
      </span>
      <MonacoEditor
        height="20vh"
        language="json"
        theme="dark"
        value={JSON.stringify(userInfo(), null, 2)}
      />
    </Container>
  );
}

export default UserInfo;
