import React from 'react'
import Todo from './Todo'

export default function List (props) {
    let list= props.Array.map( (elem,idx) => {
        return (
            <Todo key={ idx } task= { elem } />
        )
    } )
    return (
        <div>
            {list}
        </div>
    )
}