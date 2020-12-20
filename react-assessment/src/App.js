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

  reset = () => {
    // const { data } = this.state;
    // const copyData = [...data];

    this.setState({
      data: data
    })
  }

  render() {
    const { data, shelf } = this.state;
    //console.log(data)
    return (
      <div className='App' >
        <Header />
        <SearchBar filterBooksFn={this.filterBooks} resetFn={this.reset} />
        <aside className='displayContent'>
          <BookList data={data} addToShelfFn={this.addToShelf} />
          <Shelf shelf={shelf} clearShelfFn={this.clearShelf} />
        </aside>
      </div>
    );
  }
}

export default App;
