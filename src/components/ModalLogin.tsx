import { useAuthentication } from '@iad-os/react-ghost-auth';
import { Modal, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import Login from './Login';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalLogin: React.FC = () => {
  const { status, changeStatus } = useAuthentication();

  const [open, setOpen] = useState(status === 'LOGIN');

  const handleClose = () => {
    setOpen(false);
    changeStatus('INIT');
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          align="center"
          pb={4}
        >
          Login
        </Typography>
        <Login />
      </Box>
    </Modal>
  );
};

export default ModalLogin;
