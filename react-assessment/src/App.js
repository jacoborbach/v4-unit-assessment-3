import { Component } from 'react';
import SearchBar from './Components/SearchBar';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import Header from './Components/Header';
import data from './data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data,
      shelf: []
    }
  }

  addToShelf = (selectedBook) => {
    //accessing books title data.title
    const copyShelf = [...this.state.shelf, selectedBook];
    this.setState({
      shelf: copyShelf
    })
  }

  clearShelf = () => {
    const emptyShelf = [];

    this.setState({
      shelf: emptyShelf
    })
  }

  filterBooks = (input) => {
    const { data } = this.state;

    const filteredBooks = data.filter(element => {
      return element.title.includes(input);
    })

    this.setState({
      data: filteredBooks
    })
  }

  render() {
    const { data, shelf } = this.state;
    console.log(shelf)
    return (
      <div className='App' >
        <Header />
        <SearchBar filterBooksFn={this.filterBooks} />
        <aside className='displayContent'>
          <BookList data={data} addToShelfFn={this.addToShelf} />
          <Shelf shelf={shelf} clearShelfFn={this.clearShelf} />
        </aside>
      </div>
    );
  }
}

export default App;
