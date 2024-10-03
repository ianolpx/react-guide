import React from 'react';
import ReactDOM from 'react-dom/client';
import FGreeting from './FGreeting';
import CGreeting from './CGreeting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FGreeting name="Hanseo!" />
    <CGreeting name="Hanseo!" />
  </React.StrictMode>
);
