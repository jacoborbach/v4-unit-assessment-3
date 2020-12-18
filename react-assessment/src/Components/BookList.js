import { Component } from 'react';

class BookList extends Component {
    constructor() {
        super();
        this.state = {
            something: ''
        }
    }

    render() {
        //console.log(this.props.data)
        const { data } = this.props;
        return (
            <div className='bookList'>
                {data.map((element, i) => {
                    return (
                        <div key={i}>
                            <img src={element.img} alt={element.title} />
                            <p style={{ fontSize: 9 }}>{element.title} by {element.author}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BookList;