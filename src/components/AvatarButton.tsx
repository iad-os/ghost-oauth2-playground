import { useAuthentication } from '@iad-os/react-ghost-auth';
import {
  Avatar,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Divider,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import md5 from 'md5';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AvatarButton() {
  const { logout, userInfo } = useAuthentication();
  const navigate = useNavigate();

  const anchorRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

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
    <React.Fragment>
      <ButtonGroup ref={anchorRef}>
        <Button onClick={handleToggle}>
          <Avatar alt="avatar" src={getAvatarUrl()} />
        </Button>
      </ButtonGroup>
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
                  <MenuItem onClick={() => navigate('/protected/user')}>
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
    </React.Fragment>
  );
}

export default AvatarButton;
