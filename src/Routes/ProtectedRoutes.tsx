import { RequireAuth } from '@iad-os/react-ghost-auth';
import React from 'react';
import { Route, Routes } from 'react-router';
import Credentials from '../pages/credentials/Credentials';
import UserInfo from '../pages/user_info/UserInfo';

function ProtectedRouters() {
  return (
    <RequireAuth>
      <Routes>
        <Route path="/" element={<Credentials />} />
        <Route path="/users" element={<UserInfo />} />
      </Routes>
    </RequireAuth>
  );
}

export default ProtectedRouters;
