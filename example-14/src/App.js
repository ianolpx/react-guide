import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LocalStoragePage from './pages/LocalStoragePage';
import SessionStoragePage from './pages/SessionStoragePage';
import CookiePage from './pages/CookiePage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LocalStoragePage />} />
        <Route path="/session" element={<SessionStoragePage />} />
        <Route path="/cookie" element={<CookiePage />} />
      </Routes>
    </div>
  );
}

export default App;
