import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MultiSelectDropdown from './MultiSelectDropdown';
import reportWebVitals from './reportWebVitals';

const data = [
  { id: 1, title: 'option 1' },
  { id: 2, title: 'option 2' },
  { id: 3, title: 'option 3' },
  { id: 4, title: 'option 4' },
  { id: 5, title: 'option 5' }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MultiSelectDropdown options={data} type='multi' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
