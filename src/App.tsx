import AuthenticationProvider, {
  AuthenticationOptions,
  AutoLogin, LogginIn,
  RequireAuth
} from "@iad-os/react-ghost-auth";
import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserInfo from "./components/UserInfo";

const authOpts: AuthenticationOptions = {
  authorization_endpoint:
    "http://keycloak.localhost.iad2.cloud:8080/auth/realms/axepta-intranet/protocol/openid-connect/auth",
  token_endpoint:
    "http://keycloak.localhost.iad2.cloud:8080/auth/realms/axepta-intranet/protocol/openid-connect/token",
  client_id: "dashboard-app",
  requested_scopes: "openid",
  redirect_uri: "http://localhost:3000/protected",
  end_session_endpoint:
    "http://keycloak.localhost.iad2.cloud:8080/auth/realms/axepta-intranet/protocol/openid-connect/logout",
  realm: "axepta-intranet",
  serviceUrl: "",
};

function App() {
  return (
    <>
      <AuthenticationProvider options={authOpts} axios={axios}>
        <Routes>
          <Route
            path="/protected"
            element={
              <RequireAuth >
                  <UserInfo />
                  <div>sei loggato</div>
              </RequireAuth>
            }
          />
          <Route
            path="/"
            element={
              <LogginIn>
                <h2>Loading...</h2>
              </LogginIn>
            }
          />
        </Routes>

        <AutoLogin />
      </AuthenticationProvider>
    </>
  );
}

export default App;
