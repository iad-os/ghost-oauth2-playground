import { Public, useAuthentication } from '@iad-os/react-ghost-auth';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

function PublicRouters() {
  const { status } = useAuthentication();

  return (
    <Public>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2>Public page 🌐</h2>
              <Link to={'/protected'}>Go to Protected page</Link>
            </>
          }
        />
        <Route
          path="/login"
          element={status === 'LOGGED' ? <Navigate to="/public" /> : <Login />}
        />
      </Routes>
    </Public>
  );
}

export default PublicRouters;
