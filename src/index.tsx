import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Cursor trail effect
document.addEventListener('mousemove', (e) => {
  const cursor = document.createElement('div');
  cursor.className = 'cursor-trail';
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
  document.body.appendChild(cursor);
  
  // Remove the element after animation completes
  setTimeout(() => {
    cursor.remove();
  }, 500);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
