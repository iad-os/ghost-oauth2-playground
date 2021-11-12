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
              <div>Public page 🌐</div>
              <Link to={'/protected'}>Go to Protected page</Link>
            </>
          }
        />
      </Routes>
    </Public>
  );
}

export default PublicRouters;
