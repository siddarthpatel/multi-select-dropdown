import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DropdownMenu from './DropdownMenu';
import reportWebVitals from './reportWebVitals';

const data = [
  { id: 0, label: 'Siddarth Patel' },
  { id: 1, label: 'Sanchay Javeria'},
  { id: 2, label: 'Mike Sadler' },
  { id: 3, label: 'Ankit Tibrewal' },
  { id: 4, label: 'Zach Kayyali' },
  { id: 5, label: 'Sho Weimer' },
  { id: 6, label: 'Mikela Dockery' },
  { id: 7, label: 'Stephanny Cocco' },
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DropdownMenu options={data} type='multi' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
