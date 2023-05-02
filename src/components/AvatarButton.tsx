import React, { useState } from 'react';

import { useAuthentication, useUserInfo } from '@iad-os/react-ghost-auth';
import {
  Avatar,
  Box,
  Button,
  Divider,
  MenuItem,
  MenuList,
  Popover,
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

  const onMenuItemClick = (fn: Function) => {
    setAnchorEl(() => null);
    fn();
  };

  return (
    <Box position={'relative'}>
      <Button oaria-describedby={id} onClick={handleClick}>
        <Avatar alt="avatar" src={getAvatarUrl()} />
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={() => setAnchorEl(null)}
      >
        <Box>
          <MenuList id="split-button-menu">
            <MenuItem
              onClick={() =>
                onMenuItemClick(() => navigate('/protected/users'))
              }
            >
              User info
            </MenuItem>
            <Divider />
            <MenuItem onClick={logout}>Logout</MenuItem>
          </MenuList>
        </Box>
      </Popover>
    </Box>
  );
};

export default AvatarButton;
