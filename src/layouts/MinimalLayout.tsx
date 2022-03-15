import React from 'react';
import { Outlet } from 'react-router-dom';

const MiniamlLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MiniamlLayout;
