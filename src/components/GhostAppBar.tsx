import { useAuthentication } from '@iad-os/react-ghost-auth';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useColorMode } from '../contexts/ColorMode';
import AvatarButton from './AvatarButton';

function GhostAppBar() {
  const { login, isAuthenticated } = useAuthentication();

  const theme = useTheme();

  const { toggleColorMode } = useColorMode();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            👻 Oauth2 Playground
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          {!isAuthenticated() && (
            <Button color="inherit" onClick={login}>
              Login
            </Button>
          )}
          {isAuthenticated() && <AvatarButton />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default GhostAppBar;
