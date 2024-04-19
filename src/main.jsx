import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecipeProvider } from './RecipeContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </React.StrictMode>,
);