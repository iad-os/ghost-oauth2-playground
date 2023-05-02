import { AuthenticationConfig } from '@iad-os/react-ghost-auth';

export const PROVIDERS = {
  KEYCLOAK: 'keycloak',
  GOOGLE: 'google',
};

const authConfig: AuthenticationConfig = {
  providers: {},
};

authConfig.providers[PROVIDERS.KEYCLOAK] = {
  name: PROVIDERS.KEYCLOAK,
  authorization_endpoint:
    'https://login.iad2.eu/auth/realms/iad-developers/protocol/openid-connect/auth',
  token_endpoint:
    'https://login.iad2.eu/auth/realms/iad-developers/protocol/openid-connect/token',
  client_id: 'react-ghost-oidc',
  requested_scopes: 'openid',
  redirect_uri: 'http://localhost:3000/protected',
  end_session_endpoint:
    'https://login.iad2.eu/auth/realms/iad-developers/protocol/openid-connect/logout',
  redirect_logout_uri: 'http://localhost:3000',
  pkce: true,
};

authConfig.providers[PROVIDERS.GOOGLE] = {
  name: PROVIDERS.GOOGLE,
  authorization_endpoint: 'https://accounts.google.com/o/oauth2/auth',
  token_endpoint: 'https://oauth2.googleapis.com/token',
  client_id:
    '1005015699782-a3hn7f2akfk1pvdoh1mnjlid145p4nsj.apps.googleusercontent.com',
  requested_scopes: 'profile email openid',
  redirect_uri: 'http://localhost:3000/protected',
  end_session_endpoint: '',
  redirect_logout_uri: 'http://localhost:3000',
  access_type: 'offline',
  client_secret: import.meta.env.VITE_GOOGLE_SECRET,
  pkce: true,
};

export default authConfig;
