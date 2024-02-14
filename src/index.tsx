import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import './styles/fonts.css';
import './styles/styles.css';

const root = document.querySelector('#root');

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

createRoot(root).render(app);
