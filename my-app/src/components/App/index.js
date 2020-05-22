import React, { Component } from 'react';
import './App.css';
import Series from '../../containers/series/index';
import 'whatwg-fetch';
import Main from '../Main/Index';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Series List</h1>
          <Main/>
      </div>
    );
  }
}

export default App;
