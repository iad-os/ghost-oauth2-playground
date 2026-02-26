/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IDP_ISSUER: string;
  readonly VITE_IDP_CLIENT_ID: string;
  readonly VITE_IDP_REDIRECT_URI: string;
  readonly VITE_IDP_LOGOUT_REDIRECT_URI: string;
  readonly VITE_IDP_SCOPES: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
