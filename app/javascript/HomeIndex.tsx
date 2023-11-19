import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { HelloReact } from './components/HelloReact';
import { Header } from './components/Header'

function HomeIndex() {
  return (
    <div className='container'>
      <div className='container'>
        <p>title</p>
        <p>text</p>
      </div>
    </div>
  )
}

const root = document.getElementById('homeIndex');
if (!root) {
  throw new Error('No root element');
}
createRoot(root).render(
  <HomeIndex />
);
