import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import PropertyPortfolio from './PropertyPortfolio.jsx'; // <— add this

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PropertyPortfolio />   {/* <— render this, not <App /> */}
  </React.StrictMode>,
);
