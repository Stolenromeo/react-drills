import React, { Component } from 'react'

export default class NewTask extends Component {
    constructor(props) {
        super(props)
        this.state= {
            input: ''
        }
    }

    InputChange = (e) => {
        this.setState({
            input:e
        })
    }

    handleAdd = () => {    
    this.props.addTask(this.state.input);
    this.setState({ input: '' });
    } 

    render () {
        return (
            <div>
                <input value={this.state.input}
                onChange={ e => this.InputChange(e.target.value)} />
                <button onClick={this.handleAdd} >Add</button>
            </div>
        )

    }

}