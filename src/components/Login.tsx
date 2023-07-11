import { useAuthentication } from '@iad-os/react-ghost-auth';
import { Button, Stack } from '@mui/material';
import React from 'react';

const Login: React.FC = () => {
  const { login, providers } = useAuthentication();

  return (
    <Stack spacing={2}>
      {providers.map(p => (
        <Button onClick={() => login(p.issuer)} variant="outlined">
          {p.name}
        </Button>
      ))}
    </Stack>
  );
};

export default Login;
