import React from 'react';
import ReactDOM from 'react-dom/client';
import CCounter from './Ccomponent';
import FCounter from './Fcomponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CCounter />
    <FCounter />
  </React.StrictMode>
);
