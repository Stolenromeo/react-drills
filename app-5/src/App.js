import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Image from './Component/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image Image={"https://images.pexels.com/photos/37403/bora-bora-french-polynesia-sunset-ocean.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"} />
      </div>
    );
  }
}

export default App;
