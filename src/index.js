import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import $ from 'jquery'; 

window.$ = $; // Make jQuery available globally
window.jQuery = $; // Make jQuery available globally

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

