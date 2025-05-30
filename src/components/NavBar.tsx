import { useAuthentication } from '@iad-os/react-ghost-auth';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from '@mui/material';
import AvatarButton from './AvatarButton';
import { useAppTheme } from '../contexts/AppTheme';
import { useNavigate } from '@tanstack/react-router';

const Title = styled(Typography)(({ theme }) => ({
  marginRight: 2,
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
}));

const NavBar = () => {
  const { isAuthenticated, login } = useAuthentication();

  const theme = useTheme();

  const { toggleColorMode } = useAppTheme();

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Stack
            display={'flex'}
            direction={'row'}
            alignItems={'center'}
            sx={{ flexGrow: 1 }}
          >
            <Button
              onClick={() => navigate({ to: '/public' })}
              variant="text"
              color="inherit"
            >
              <Title variant="h6" noWrap>
                👻 Oauth2 Playground
              </Title>
            </Button>
            <Button
              onClick={() => navigate({ to: '/private/form' })}
              variant="text"
              color="inherit"
            >
              Form
            </Button>
          </Stack>
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          {!isAuthenticated() && (
            <Button color="inherit" onClick={() => login()}>
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
