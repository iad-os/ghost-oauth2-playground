import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const MainLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container fixed>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
