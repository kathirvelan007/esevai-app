import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LanguageProvider } from "./LanguageContext";
import { ThemeProvider } from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <LanguageProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </LanguageProvider>
  </React.StrictMode>
);
