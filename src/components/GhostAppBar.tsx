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
import { useNavigate } from 'react-router-dom';
import { useColorMode } from '../contexts/ColorMode';
import AvatarButton from './AvatarButton';

function GhostAppBar() {
  const { login, isAuthenticated } = useAuthentication();

  const theme = useTheme();

  const { toggleColorMode } = useColorMode();

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Button
              onClick={() => navigate(isAuthenticated() ? '/protected' : '/')}
            >
              👻 Oauth2 Playground
            </Button>
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
