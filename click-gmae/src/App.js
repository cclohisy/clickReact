import React, { Component } from 'react';
import TileContainer from "./components/TileContainer"
import HeaderClicks from "./components/HeaderClicks";
import cards from "./cards.json";


import './App.css';

class App extends Component {

  state = {
    cards,
    score: 0,
    message: "Start Clicking"
  }

  incrementScore = () => {
    if (this.state.score < 12) {
      this.setState({
        score: this.state.score + 1,
        message:"KEEP CLICKING"
      })
    }
    else if (this.state.score = 12) {
      this.setState({
        message: "Wow you must have a great memory... YOU WON good job!",
        score: 0
      })
    }
  }

  shuffleCards = () => {
    cards.sort(function (a, b) { return 0.5 - Math.random() })
    this.setState({
      cards: this.state.cards
    })
  }

  

  //set indv. card  clicked cool to true/false
  beenClicked = (id) => {
    if (this.state.cards.id === id) {
      this.state.cards.clicked = false
      alert("changed to false")
      // let clicked = this.state.cards[id].clicked
      // this.setState({
      //   clicked: false
      // })
    }
  }
  handleClick = (id) => {
    this.incrementScore();
    this.shuffleCards()
    this.beenClicked(id)
  }




  render() {
    return (
      <div className="App">
        <HeaderClicks
          score={this.state.score}
          message={this.state.message}
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
