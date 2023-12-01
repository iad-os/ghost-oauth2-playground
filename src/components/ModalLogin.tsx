import { useAuthentication } from '@iad-os/react-ghost-auth';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material';
import { useState } from 'react';

const ModalLogin = () => {
  const { status, changeStatus } = useAuthentication();

  const { login, providers } = useAuthentication();

  const [open, setOpen] = useState(status === 'LOGIN');

  const handleClose = () => {
    setOpen(false);
    changeStatus('INIT');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{'Login'}</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          {providers.map(p => (
            <Button onClick={() => login(p.issuer)} variant="outlined">
              {p.name}
            </Button>
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ModalLogin;
