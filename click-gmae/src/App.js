import React, { Component } from 'react';
import TileContainer from "./components/TileContainer"
import HeaderClicks from "./components/HeaderClicks";
import cards from "./cards.json";


import './App.css';

class App extends Component {

  state = {
    cards,
    score: 0
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  shuffleCards = () => {
    cards.sort(function (a, b) { return b - a })
    this.setState({
      cards: this.state.cards
    })
  }

  //set indv. card  clicked cool to true/false
  beenClicked = (id) => {
    if (this.state.cards.id === id) {
      this.setState({


      })
    }
  }
  handleClick = (id) => {
    this.incrementScore();
    this.shuffleCards()
    this.shuffleCards(id)
  }




  render() {
    return (
      <div className="App">
        <HeaderClicks
          score={this.state.score}
        />

        <TileContainer
          cards={this.state.cards}
          handleClick={this.handleClick}
        />
      </div>

    );
  }
}

// const App () => <Some containerComponent/> 

export default App;
