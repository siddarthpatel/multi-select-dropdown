import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DropdownMenu from './DropdownMenu';
import { DATA, TYPES } from './Constansts';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h2>Multi select dropdown menu.</h2>
    <DropdownMenu options={DATA} type={TYPES.MULTI} />
    <div style={{marginTop : '250px'}}></div>
    <h2>Single select dropdown menu.</h2>
    <DropdownMenu options={DATA} type={TYPES.SINGLE} />
  </React.StrictMode>
);

