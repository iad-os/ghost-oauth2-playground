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
import { useNavigate } from 'react-router-dom';
import AvatarButton from '../../components/AvatarButton';
import { useAppTheme } from '../../contexts/AppTheme';

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
  const { changeStatus, isAuthenticated } = useAuthentication();

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
              onClick={() => navigate(isAuthenticated() ? '/protected' : '/')}
              variant="text"
              color="inherit"
            >
              <Title variant="h6" noWrap>
                👻 Oauth2 Playground
              </Title>
            </Button>
            <Button
              onClick={() => navigate('/protected/forms')}
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
