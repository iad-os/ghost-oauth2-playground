import React, { useRef, useState } from 'react';
import { useAuthentication } from '@iad-os/react-ghost-auth';
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

function AvatarButton() {
  const { logout, userInfo } = useAuthentication();
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
        {({ TransitionProps, placement }) => (
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
}

export default AvatarButton;
