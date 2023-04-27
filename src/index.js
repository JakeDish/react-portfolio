import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './componenets/Footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
);
