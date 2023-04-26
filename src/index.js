import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Portfolio from './componenets/Portfolio/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Portfolio />
  </React.StrictMode>
);