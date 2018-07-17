import React, { Component } from 'react'

export default class Output extends Component {
    constructor(){
        super()
        this.state = {
            userInput: ''
        }

    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    render (){
        return (
            <div>
                <input onChange={this.handleChange} type="text" />
                <h4>{this.state.userInput}</h4>
            </div>
        )
    }

}