import { Component } from 'react';
import SearchBar from './Components/SearchBar';
import BookList from './Components/BookList';
import data from './data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App" >
        <SearchBar data={data} />
        <BookList data={data} />
      </div>
    );
  }
}

export default App;
