import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    }
  }
  
  render() {
    const { value } = this.state;
    console.log(value)
    return (
      <div>
        <p>MULTI SELECT DROPDOWN APP</p>
      </div>
    );
  }
}

export default App;
