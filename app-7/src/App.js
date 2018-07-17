import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import List from './Components/List'
import NewTask from './Components/NewTask'

class App extends Component {
  constructor(){
    super()
    this.state= {
      taskArray: []
    }

  }

  addTask = (newTask) => {
    this.setState({
      taskArray: [this.state.taskArray, newTask]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask addTask={ this.addTask } />
        <List Array={ this.state.taskArray } />
      </div>
    );
  }
}

export default App;
