import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MultiSelectDropdown from './MultiSelectDropdown';
import reportWebVitals from './reportWebVitals';

const data = [
  { id: 1, title: 'Siddarth Patel' },
  { id: 2, title: 'Sanchay Javeria'},
  { id: 3, title: 'Mike Sadler' },
  { id: 4, title: 'Ankit Tibrewal' },
  { id: 5, title: 'Zach Kayyali' },
  { id: 6, title: 'Sho Weimer' },
  { id: 7, title: 'Mikela Dockery' },
  { id: 8, title: 'Stephanny Cocco' },
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
