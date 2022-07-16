import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DropdownMenu from './DropdownMenu';

const data = [
  { label: 'Siddarth Patel' },
  { label: 'Sanchay Javeria'},
  { label: 'Mike Sadler' },
  { label: 'Ankit Tibrewal' },
  { label: 'Zach Kayyali' },
  { label: 'Sho Weimer' },
  { label: 'Mikela Dockery' },
  { label: 'Stephanny Cocconcelli' },
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h2>Multi select dropdown menu.</h2>
    <DropdownMenu options={data} type='multi'/>
    <div style={{marginTop : '250px'}}></div>
    <h2>Single select dropdown menu.</h2>
    <DropdownMenu options={data} type='single'/>
  </React.StrictMode>
);

