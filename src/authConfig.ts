import { AuthenticationConfig } from '@iad-os/react-ghost-auth';
/*
const realm = 'realm';
const baseUrl = 'http://hostname/auth/realms/';
*/
const authConfig: AuthenticationConfig = {
  providers: [
    {
      issuer: 'https://login.iadengage.com/auth/realms/iadengage-com',
      name: 'IAD_Engage',
      authorization_endpoint:
        'https://login.iadengage.com/auth/realms/iadengage-com/protocol/openid-connect/auth',
      token_endpoint:
        'https://login.iadengage.com/auth/realms/iadengage-com/protocol/openid-connect/token',
      redirect_logout_uri: 'http://localhost:3100',
      client_id: 'prod_iadengage_com',
      requested_scopes: 'profile openid',
      end_session_endpoint:
        'https://login.iadengage.com/auth/realms/iadengage-com/protocol/openid-connect/logout',
      redirect_uri: 'http://localhost:3100/protected',
      pkce: true,
    },
  ],
};

export default authConfig;
