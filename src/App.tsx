import AuthenticationProvider, {
  AutoLogin,
  LogginIn,
} from '@iad-os/react-ghost-auth';
import axios from 'axios';
import React from 'react';
import authConfig from './authConfig';
import ModalLogin from './components/ModalLogin';
import AppThemeProvider from './contexts/AppTheme';
import Routes from './routes/Routes';

const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <AuthenticationProvider config={authConfig} axios={axios}>
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
