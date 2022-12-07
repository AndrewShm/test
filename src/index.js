import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { BrowserRouter } from './router';
import ReactDOM from 'react-dom/client';

import './index.scss';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);
