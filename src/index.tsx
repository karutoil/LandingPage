import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

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
