import React, { Component } from 'react'

export default class List extends Component {
    constructor () {
        super()

        this.state= {
            dogs: ['xander', 'charlotte', 'maverick', 'kevin', 'riddick'],
            userInput: ''
        }
    }

    onChange = (e) => {
        this.setState({
            userInput:e.target.value
        })
    }

    render() {
    let displayDogs = this.state.dogs.filter((elem, idx)=> elem.includes(this.state.userInput)).map(
        (elem, idx) => {
            return (
                <div>
                    <h2 key={idx}>{elem}</h2>
                </div>
            )
        }
    )
        return (
            <div>
                <input type='text' onChange= {this.onChange}/>
                {displayDogs}
            </div>
        )
    }

}