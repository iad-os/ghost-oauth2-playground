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

const App = () => {
  const navigate = useNavigate();

  function handleRoute(route: string) {
    const url = new URL(route);
    navigate(url.pathname, { replace: true });
  }

  return (
    <AuthenticationProvider
      config={authConfig}
      axios={axios}
      onRoute={handleRoute}
      onError={mes => alert(mes)}
    >
      <Routes />
      <LogginIn>
        <h2>🔄 Loading...</h2>
      </LogginIn>
      <AutoLogin>
        <ModalLogin />
      </AutoLogin>
    </AuthenticationProvider>
  );
};

export default App;
