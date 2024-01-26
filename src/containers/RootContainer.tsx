import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const RootContainer = () => {
  return (
    <>
      <NavBar />
      <Container fixed>
        <Outlet />
      </Container>
    </>
  );
};

export default RootContainer;
