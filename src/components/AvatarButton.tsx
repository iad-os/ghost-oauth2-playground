import React, { useState } from 'react';

import { useAuthentication, useUserInfo } from '@iad-os/react-ghost-auth';
import {
  Avatar,
  Box,
  Button,
  Divider,
  MenuItem,
  MenuList,
  Popper,
} from '@mui/material';
import md5 from 'md5';
import { useNavigate } from 'react-router-dom';

const AvatarButton: React.FC = () => {
  const { logout } = useAuthentication();
  const userInfo = useUserInfo<any>();

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  function getAvatarUrl() {
    if (userInfo && userInfo.picture) {
      return userInfo.picture;
    } else if (userInfo && userInfo.email) {
      return `https://www.gravatar.com/avatar/${md5(userInfo.email)}`;
    } else if (userInfo && userInfo.name) {
      return `https://eu.ui-avatars.com/api/?name=${(
        userInfo.name as string
      ).replace(' ', '+')}`;
    } else if (userInfo) {
      return `https://eu.ui-avatars.com/api/?name=${
        userInfo.preferred_username as string
      }`;
    }
  }

  return (
    <>
      <Button oaria-describedby={id} onClick={handleClick}>
        <Avatar alt="avatar" src={getAvatarUrl()} />
      </Button>

      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <Box>
          <MenuList id="split-button-menu">
            <MenuItem onClick={() => navigate('/protected/users')}>
              User info
            </MenuItem>
            <Divider />
            <MenuItem onClick={logout}>Logout</MenuItem>
          </MenuList>
        </Box>
      </Popper>
    </>
  );
};

export default AvatarButton;
