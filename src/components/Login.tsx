import { useAuthentication } from '@iad-os/react-ghost-auth';
import { Button, Stack } from '@mui/material';
import React from 'react';
import { PROVIDERS } from '../authConfig';
import GoogleIcon from '@mui/icons-material/Google';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Login() {
  const { login } = useAuthentication();

  function handleKeyCloak() {
    login(PROVIDERS.KEYCLOAK);
  }
  function handleGoogle() {
    login(PROVIDERS.GOOGLE);
  }

  return (
    <Stack spacing={2}>
      <Button
        onClick={handleKeyCloak}
        variant="outlined"
        startIcon={<AccountCircleIcon />}
      >
        IAD OIDC
      </Button>
      <Button
        onClick={handleGoogle}
        variant="outlined"
        startIcon={<GoogleIcon />}
      >
        Google
      </Button>
    </Stack>
  );
}

export default Login;
