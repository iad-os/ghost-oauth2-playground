import { useAuthentication } from '@iad-os/react-ghost-auth';
import { Avatar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import md5 from 'md5';
import React from 'react';
import { useNavigate } from 'react-router';

function GhostAppBar() {
  const { login, logout, isAuthenticated, userInfo } = useAuthentication();

  const navigate = useNavigate();

  function getAvatarUrl() {
    const userInfoData = userInfo();
    if (userInfoData && userInfoData.email) {
      return `https://www.gravatar.com/avatar/${md5(userInfoData.email)}`;
    } else if (userInfoData && userInfoData.name) {
      return `https://eu.ui-avatars.com/api/?name=${(
        userInfoData.name as string
      ).replace(' ', '+')}`;
    } else if (userInfoData) {
      return `https://eu.ui-avatars.com/api/?name=${
        userInfoData.preferred_username as string
      }`;
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ghost Oauth2 Playground
          </Typography>
          {!isAuthenticated() && (
            <Button color="inherit" onClick={login}>
              Login
            </Button>
          )}
          {isAuthenticated() && (
            <Button onClick={() => navigate('/protected/user')}>
              <Avatar alt="avatar" src={getAvatarUrl()} />
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default GhostAppBar;
