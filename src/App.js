import React, { Component } from 'react';
import Game from './Components/Game'
import './App.css';
import cardsDeck from './Cards';


class App extends Component {

  constructor() {
    super();

    this.startGame = this.startGame.bind(this);
    this.loadDeck = this.loadDeck.bind(this);
    this.dealHands = this.dealHands.bind(this);
    this.dealCard = this.dealCard.bind(this);

    this.state = {
      deck: {},
      playerHand: {},
      computerHand: {},
    }
  }

  startGame() {
    this.loadDeck()
    this.dealHands()
  }

  loadDeck() {
    console.log('deck loading')
    this.setState({
      deck: cardsDeck,
    })
  }

  dealHands() {
    console.log('dealing hands')
  }

  dealCard() {
    console.log('dealing card')
  }

  render() {
    return (
      <div className="App">
        <Game startGame={this.startGame} />
      </div>
    );
  }
}

export default App;
