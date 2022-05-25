import AuthenticationProvider, {
  AutoLogin,
  LogginIn,
} from '@iad-os/react-ghost-auth';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import authConfig from './authConfig';
import ModalLogin from './components/ModalLogin';
import AppThemeProvider from './contexts/AppTheme';
import Routes from './routes/Routes';

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppThemeProvider>
      <AuthenticationProvider
        config={authConfig}
        axios={axios}
        onRoute={route => {
          const local = `${window.location.protocol}//${
            window.location.hostname
          }${window.location.port ? `:${window.location.port}` : ''}`;
          navigate(route.replace(local, ''), { replace: true });
        }}
      >
        <Routes />
        <LogginIn>
          <h2>🔄 Loading...</h2>
        </LogginIn>
        <AutoLogin>
          <ModalLogin />
        </AutoLogin>
      </AuthenticationProvider>
    </AppThemeProvider>
  );
};

export default App;
