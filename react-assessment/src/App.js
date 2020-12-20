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

  render() {
    const { data } = this.state;
    return (
      <div className='App' >
        <Header />
        <SearchBar data={data} />
        <aside className='displayContent'>
          <BookList data={data} />
          <Shelf />
        </aside>
      </div>
    );
  }
}

export default App;
