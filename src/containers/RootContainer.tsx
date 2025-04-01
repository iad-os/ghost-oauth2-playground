import { Container } from '@mui/material';
import NavBar from '../components/NavBar';

const RootContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container fixed>{children}</Container>
    </>
  );
};

export default RootContainer;
