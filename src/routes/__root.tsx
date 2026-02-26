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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const navigate = useNavigate();

  const [queryClient] = useState<QueryClient>(() => new QueryClient());

  function handleRoute(route: string) {
    const url = new URL(route);
    navigate({ to: url.pathname });
  }

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>

        <AuthenticationProvider
          config={authConfig}
          onRoute={handleRoute}
          onError={mes => alert(mes)}
          //saveOnLocalStorage
          overrideRedirectUri={lo => lo.href}
          enableLog={false}
        >
          <RootContainer>
            <Outlet />
          </RootContainer>
          <Logging in={<h2>🔄 Loading...</h2>} />
          <AutoLogin>
            <ModalLogin />
          </AutoLogin>
        </AuthenticationProvider>
      </QueryClientProvider>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
