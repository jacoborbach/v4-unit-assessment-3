// rce + tab: Create a component outline
import React, { Component } from 'react'

export class Shelf extends Component {
    render() {
        return (
            <div>
                <h2>These are the books you chose:</h2>
                {/* {this.props.shelf} */}
                {this.props.shelf.map((element, i) => {
                    return <p key={i}>{element}</p>
                })}
            </div>
        )
    }
}

export default Shelf
