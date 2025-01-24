import { AuthenticationConfig } from '@iad-os/react-ghost-auth';

const realm = 'realm';
const baseUrl = 'http://hostname/auth/realms/';

const authConfig: AuthenticationConfig = {
  providers: [
    {
      name: '-',
      issuer: '-',
      authorization_endpoint: `${baseUrl}${realm}/protocol/openid-connect/auth`,
      token_endpoint: `${baseUrl}${realm}/protocol/openid-connect/token`,
      client_id: 'client-id',
      requested_scopes: 'openid',
      redirect_uri: 'http://localhost:3100/protected',
      end_session_endpoint: `${baseUrl}${realm}/protocol/openid-connect/logout`,
      redirect_logout_uri: 'http://localhost:3100',
      pkce: true,
      defualt: true,
    },
  ],
};

export default authConfig;
