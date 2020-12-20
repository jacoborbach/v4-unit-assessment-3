// Still need to add clear Search
//Obviously, still need to connect this to the display component


import { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            inputVal: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            inputVal: e
        })
    }

    handleClick() {
        const { inputVal } = this.state;
        // const { data } = this.props;

        // data.filter((element) => {
        //     return element.title.includes(inputVal);
        // })
        this.props.filterBooksFn(inputVal)
    }

    render() {
        //console.log(this.state.inputVal)
        console.log(this.props)
        return (
            <div>
                <input onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={this.handleClick}>Search</button>
                <button>Clear Search</button>

            </div>
        )
    }
}

export default SearchBar;