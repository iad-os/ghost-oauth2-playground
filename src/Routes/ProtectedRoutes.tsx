import { RequireAuth } from '@iad-os/react-ghost-auth';
import React from 'react';
import { Route, Routes } from 'react-router';
import HomeProtected from '../pages/home_protected/HomeProtected';
import UserInfo from '../pages/user_info/UserInfo';

function ProtectedRouters() {
  return (
    <RequireAuth>
      <Routes>
        <Route path="/" element={<HomeProtected />} />
        <Route path="/user" element={<UserInfo />} />
      </Routes>
    </RequireAuth>
  );
}

export default ProtectedRouters;
