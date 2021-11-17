import AuthenticationProvider, {
  LogginIn,
  AutoLogin,
} from '@iad-os/react-ghost-auth';
import axios from 'axios';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import authConfig from './authConfig';
import ModalLogin from './components/ModalLogin';
import NavBar from './components/NavBar';
import ColorModeProvider from './contexts/ColorMode';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import PublicRoutes from './Routes/PublicRoutes';

function App() {
  return (
    <ColorModeProvider>
      <AuthenticationProvider config={authConfig} axios={axios}>
        <NavBar />
        <Routes>
          <Route path="/protected/*" element={<ProtectedRoutes />} />
          <Route path="/public/*" element={<PublicRoutes />} />
          <Route path="/" element={<Navigate to="/public" />} />
          <Route path="/*" element={<h2>⚠ OOPS... Page not found! ⚠</h2>} />
        </Routes>
        <LogginIn>
          <h2>🔄 Loading...</h2>
        </LogginIn>
        <AutoLogin>
          <ModalLogin />
        </AutoLogin>
      </AuthenticationProvider>
    </ColorModeProvider>
  );
}

export default App;
