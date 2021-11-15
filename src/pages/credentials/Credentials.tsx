import { Container } from '@mui/material';
import React from 'react';
import MonacoEditor from '../../components/MonacoEditor';

const HOSTNAME = window.location.hostname;
const ACCESS_TOKEN = `${HOSTNAME}_access_token`;
const REFRESH_TOKEN = `${HOSTNAME}_refresh_token`;

function Credentials() {
  const credentials = {
    access_token: localStorage.getItem(ACCESS_TOKEN),
    refresh_token: localStorage.getItem(REFRESH_TOKEN),
  };

  return (
    <Container fixed>
      <span>
        <h2>🔑 Credentials</h2>
      </span>
      <MonacoEditor
        height="40vh"
        language="json"
        value={JSON.stringify(credentials, null, 2)}
      />
    </Container>
  );
}

export default Credentials;
