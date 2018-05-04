import React, { Component } from 'react';
import TileContainer from "./components/TileContainer"
import HeaderClicks from "./components/HeaderClicks";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderClicks/>
          <TileContainer/>
      </div>
      
    );
  }
}

// const App () => <Some containerComponent/> 

export default App;
