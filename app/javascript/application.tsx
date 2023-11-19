// Entry point for the build script in your package.json
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import 'bootstrap';

type Props = {
  data: {
    name: string
    age: number
    login: boolean
    root_path: string
    login_path: string
    logout_path: string
    profile_path: string
  }
}
function App({data}: Props) {
  return (
    <>
      <Header 
        data={data}
      />
      <Footer />
    </>
  )
}

const root = document.getElementById('root');
if (!root) {
  throw new Error('No hello element');
}
const data = JSON.parse(String(root.getAttribute('data')));
createRoot(root).render(
  <React.StrictMode>
    <App 
      data={data}
    />
  </React.StrictMode>
);