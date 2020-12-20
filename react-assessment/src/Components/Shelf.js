// rce + tab: Create a component outline
import React, { Component } from 'react'

export class Shelf extends Component {
    render() {
        return (
            <div>
                <h1>This is your shelf:</h1>
                <button onClick={this.props.clearShelfFn}>Clear Shelf</button>
                {/* {this.props.shelf} */}
                {this.props.shelf.map((element, i) => {
                    return <p key={i}>{element}</p>
                })}
            </div>
        )
    }
}

export default Shelf
