import { ThemeProvider } from '@emotion/react';
import { useAuthentication } from '@iad-os/react-ghost-auth';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, IconButton, Theme, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useColorMode } from '../contexts/ColorMode';
import AvatarButton from './AvatarButton';
import { deepmerge } from '@mui/utils';

function NavBar() {
  const { changeStatus, isAuthenticated } = useAuthentication();

  const theme = useTheme();

  const { toggleColorMode } = useColorMode();

  const navigate = useNavigate();

  const innerTheme = useMemo(
    () =>
      createTheme(
        deepmerge(theme, {
          ...(theme.palette.mode === 'light' && {
            components: {
              MuiButton: {
                styleOverrides: {
                  root: {
                    color: '#fff',
                  },
                },
              },
            },
          }),
          ...(theme.palette.mode === 'dark' && {
            palette: {
              text: {
                primary: '#f8b133',
              },
            },
          }),
        } as Theme)
      ),
    [theme]
  );

  return (
    <ThemeProvider theme={innerTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Button
                onClick={() => navigate(isAuthenticated() ? '/protected' : '/')}
              >
                <Typography>👻 Oauth2 Playground</Typography>
              </Button>
            </Box>
            <IconButton
              sx={{ ml: 1 }}
              onClick={toggleColorMode}
              color="inherit"
            >
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
    </ThemeProvider>
  );
}

export default NavBar;
