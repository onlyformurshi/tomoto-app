import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StoreContextProvide } from './context/StoreContext';
import { ApiProvider } from './context/ApiContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <ApiProvider >
      <StoreContextProvide >
        <App />
      </StoreContextProvide>
    </ApiProvider>
  </BrowserRouter>

);
