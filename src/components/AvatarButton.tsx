import React, { useRef, useState } from 'react';

import {
  Avatar,
  Button,
  ClickAwayListener,
  Divider,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import md5 from 'md5';
import { useNavigate } from 'react-router-dom';
import { useAuthentication, useUserInfo } from '@iad-os/react-ghost-auth';

const AvatarButton: React.FC = () => {
  const { logout } = useAuthentication();
  const userInfo = useUserInfo<any>();

  const navigate = useNavigate();

  const anchorRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event: Event) {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  }

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
      <div ref={anchorRef}>
        <Button onClick={handleToggle}>
          <Avatar alt="avatar" src={getAvatarUrl()} />
        </Button>
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }: any) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  <MenuItem onClick={() => navigate('/protected/users')}>
                    User info
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default AvatarButton;
