import { useAuthentication } from '@iad-os/react-ghost-auth';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AvatarButton from '../../components/AvatarButton';
import { useAppTheme } from '../../contexts/AppTheme';

const NavBar: React.FC = () => {
  const { changeStatus, isAuthenticated } = useAuthentication();

  const theme = useTheme();

  const { toggleColorMode } = useAppTheme();

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              onClick={() => navigate(isAuthenticated() ? '/protected' : '/')}
              variant="text"
              color="inherit"
            >
              <Typography>👻 Oauth2 Playground</Typography>
            </Button>
          </Box>
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          {!isAuthenticated() && (
            <Button color="inherit" onClick={() => changeStatus('LOGIN')}>
              Login
            </Button>
          )}
          {isAuthenticated() && <AvatarButton />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
