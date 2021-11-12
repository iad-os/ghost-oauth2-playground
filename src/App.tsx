import AuthenticationProvider, {
  AuthenticationOptions,
  AutoLogin,
  LogginIn,
  Public,
  RequireAuth,
} from '@iad-os/react-ghost-auth';
import axios from 'axios';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LogoutButton from './components/LogoutButton';
import UserInfo from './components/UserInfo';

const defaultAuthOpts: AuthenticationOptions = {
  authorization_endpoint:
    'https://login.iad2.eu/auth/realms/iad-developers/protocol/openid-connect/auth',
  token_endpoint:
    'https://login.iad2.eu/auth/realms/iad-developers/protocol/openid-connect/token',
  client_id: 'react-ghost-oidc',
  requested_scopes: 'openid',
  redirect_uri: 'http://localhost:3000/protected',
  end_session_endpoint:
    'https://login.iad2.eu/auth/realms/iad-developers/protocol/openid-connect/logout',
  realm: 'iad-developers',
  serviceUrl: '',
  redirect_logout_uri: 'http://localhost:3000',
};

function App() {
  return (
    <>
      <AuthenticationProvider options={defaultAuthOpts} axios={axios}>
        <Routes>
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <div>Protected page 🔒</div>
                <Link to={'/'}>Go to Public page</Link>
                <UserInfo />
                <LogoutButton />
              </RequireAuth>
            }
          />
          <Route
            path="/"
            element={
              <Public>
                <div>Public page 🌐</div>
                <Link to={'/protected'}>Go to Protected page</Link>
              </Public>
            }
          />
        </Routes>
        <LogginIn>
          <h2>🔄 Loading...</h2>
        </LogginIn>
        <AutoLogin />
      </AuthenticationProvider>
    </>
  );
}

export default App;
