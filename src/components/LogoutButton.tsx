import { useAuthentication } from '@iad-os/react-ghost-auth';

const LogoutButton = () => {
  const { logout } = useAuthentication();
  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
