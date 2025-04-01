import AuthenticationProvider, {
  AutoLogin,
  Logging,
} from '@iad-os/react-ghost-auth';
import { Outlet, createRootRoute, useNavigate } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import * as React from 'react';
import authConfig from '../authConfig';
import ModalLogin from '../components/ModalLogin';
import RootContainer from '../containers/RootContainer';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const navigate = useNavigate();

  function handleRoute(route: string) {
    const url = new URL(route);
    navigate({ to: url.pathname });
  }

  return (
    <React.Fragment>
      <AuthenticationProvider
        config={authConfig}
        onRoute={handleRoute}
        onError={mes => alert(mes)}
        //saveOnLocalStorage
        overrideRedirectUri={lo => lo.href}
        enableLog
      >
        <RootContainer>
          <Outlet />
        </RootContainer>
        <Logging in={<h2>🔄 Loading...</h2>} />
        <AutoLogin>
          <ModalLogin />
        </AutoLogin>
      </AuthenticationProvider>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
