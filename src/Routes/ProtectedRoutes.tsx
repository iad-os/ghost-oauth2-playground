import { RequireAuth } from '@iad-os/react-ghost-auth';
import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';
import UserInfo from '../components/UserInfo';

function ProtectedRouters() {
  return (
    <RequireAuth>
      <h2>Protected page 🔒</h2>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>You Are Logged</div>
              <Link to={'/protected/user'}>Go to User info</Link>
            </>
          }
        />
        <Route
          path="/user"
          element={
            <>
              <Link to={'/'}>Go to Public page</Link>
              <UserInfo />
              <LogoutButton />
            </>
          }
        />
      </Routes>
    </RequireAuth>
  );
}

export default ProtectedRouters;
