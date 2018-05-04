import React, { Component } from 'react';
import TileContainer from "./components/TileContainer"
import HeaderClicks from "./components/HeaderClicks";

import './App.css';

class App extends Component {

  state = {
    score: 0
  }

  incrementScore = () => {
    this.setState({
      count: this.state.score + 1
    })
  }




  render() {
    return (
      <div className="App">
        <HeaderClicks
          score={this.state.score}
        />

        <TileContainer
          incrementScore={this.incrementScore}
        />
      </div>

    );
  }
}

// const App () => <Some containerComponent/> 

export default App;
