import React from 'react';
import ReactDOM from 'react-dom/client';
import './style//index.scss';
import ContextProvider from "./components/Context/ContextProvider";
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
