import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Todo from './Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      userInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleClick = () => {
    let tasks= this.state.tasks;
    tasks.push(this.state.userInput);
    this.setState({
      tasks: tasks,
      userInput: ''
    })
  }

  render() {
    let listed = this.state.tasks.map( (elem, idx) => {
      return (
        <Todo task={elem} />
      )
    });
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.userInput}
        placeholder='What to do?'
        onChange={this.handleChange}
        type="text" 
        />
        <button onClick={this.handleClick}>Add</button>
        <br/>
        {listed}

      </div>
    );
  }
}

export default App;
