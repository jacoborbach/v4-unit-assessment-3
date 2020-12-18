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
            <div>
                {data.map((element, i) => {
                    return (
                        <img key={i} src={element.img} alt={element.title} />
                        // `url('${images[0]}')`
                        // <h4 key={i}>{element.title} by {element.author}</h4>
                    )
                })}
            </div>
        )
    }
}

export default BookList;