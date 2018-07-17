import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super()
        this.state={
            username:'',
            password:''
        }
    }

    changeUN = (e)=> {
        this.setState({
            username: e.target.value
        })
    }

    changePW = (e)=> {
        this.setState({
            password: e.target.value
        })
    }

    popUp = () => {
        alert('Username: '+ this.state.username + ' Password: '+ this.state.password)
    }

    render() {
        return (
            <div>
                <input onChange= {this.changeUN} type='text'/>
                <input onChange= {this.changePW} type='text'/>
                <button onClick= {this.popUp} >Log in</button>
            </div>
        )
    }

}