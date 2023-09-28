import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/useAuth';
import './index.css';
import App from './App';

import './server.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </AuthProvider>
);
