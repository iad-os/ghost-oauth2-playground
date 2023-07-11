import { AuthenticationConfig } from '@iad-os/react-ghost-auth';

const authConfig: AuthenticationConfig = {
  providers: [
    {
      name: 'IAD KEYCLOAK',
      issuer: 'https://login.iad2.eu/auth/realms/iad-developers',
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
      defualt: true,
    },
  ],
};

export default authConfig;
