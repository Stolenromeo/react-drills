import React, { Component } from 'react'

export default class List extends Component {

    constructor() {
        super()

        this.state={
            array:['This is string 1', 'This is string 2', 'String 3 goes here','Final stringy']
        }
    }



    render () {
        return (
            <div>
            { this.state.array.map((string, id) => {
                return (
                    <div>
                       <h2> {string} </h2>
                    </div>
                )
                }
            )
        
       }    
        </div>
        )
    }

}