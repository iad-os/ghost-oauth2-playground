import AuthenticationProvider, {
  AutoLogin,
  Logging,
} from '@iad-os/react-ghost-auth';
import { useNavigate } from 'react-router-dom';
import authConfig from './authConfig';
import ModalLogin from './components/ModalLogin';
import Routes from './routes/Routes';

const App = () => {
  const navigate = useNavigate();

  function handleRoute(route: string) {
    const url = new URL(route);
    navigate(url.pathname, { replace: true });
  }

  return (
    <AuthenticationProvider
      config={authConfig}
      onRoute={handleRoute}
      onError={mes => alert(mes)}
      //saveOnLocalStorage
      overrideRedirectUri={lo => lo.href}
      enableLog
    >
      <Routes />
      <Logging in={<h2>🔄 Loading...</h2>} />
      <AutoLogin>
        <ModalLogin />
      </AutoLogin>
    </AuthenticationProvider>
  );
};

export default App;
