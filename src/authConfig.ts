import { AuthenticationConfig } from '@iad-os/react-ghost-auth';

const authConfig: AuthenticationConfig = {
  providers: [
    {
      name: 'keycloak',
      issuer: import.meta.env.VITE_IDP_ISSUER,
      client_id: import.meta.env.VITE_IDP_CLIENT_ID,
      requested_scopes: import.meta.env.VITE_IDP_SCOPES,
      redirect_uri: import.meta.env.VITE_IDP_REDIRECT_URI,
      redirect_logout_uri: import.meta.env.VITE_IDP_LOGOUT_REDIRECT_URI,
      pkce: true,
      defualt: true,
    },
  ],
};

export default authConfig;
