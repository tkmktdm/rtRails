// Entry point for the build script in your package.json
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import 'bootstrap';

function App() {
  return (
    <>
      <Header 
        login={1}
      />
      
      <Footer />
    </>
  )
}

const root = document.getElementById('root');
if (!root) {
  throw new Error('No root element');
}
const login = 0;
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);