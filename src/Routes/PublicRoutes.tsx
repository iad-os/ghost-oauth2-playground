import { Public } from '@iad-os/react-ghost-auth';
import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

function PublicRouters() {
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
      </Routes>
    </Public>
  );
}

export default PublicRouters;
