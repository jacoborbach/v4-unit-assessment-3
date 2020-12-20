import { Component } from 'react';

class BookList extends Component {
    constructor() {
        super();
        this.state = {
            tempShelf: []
        }
    }

    handleClick = (e) => {
        const { tempShelf } = this.state;
        const copytempShelf = [...tempShelf, e.target.textContent]

        this.setState({
            tempShelf: copytempShelf
        })
        //console.log(e)
    }

    render() {
        //console.log(this.props.data)
        console.log(this.state.tempShelf)
        const { data } = this.props;
        return (
            <div className='bookList'>
                {data.map((element, i) => {
                    return (
                        <div key={i}>
                            <img src={element.img} alt={element.title} />
                            <p style={{ fontSize: 9 }} onClick={e => this.handleClick(e)}>{element.title} by {element.author}</p>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default BookList;