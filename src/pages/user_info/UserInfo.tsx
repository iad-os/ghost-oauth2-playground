import { useAuthentication } from '@iad-os/react-ghost-auth';
import { Button, Container } from '@mui/material';
import React from 'react';
import MonacoEditor from '../../components/MonacoEditor';

function UserInfo() {
  const { userInfo } = useAuthentication();

  return (
    <Container fixed>
      <span>
        <h2>User info </h2>
      </span>
      <MonacoEditor
        height="40vh"
        language="json"
        value={JSON.stringify(userInfo(), null, 2)}
      />
      <Button variant="outlined" color="secondary">
        CIAO
      </Button>
    </Container>
  );
}

export default UserInfo;