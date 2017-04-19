import React, { Component } from 'react';
import Game from './Components/Game'
import './App.css';
import cardsDeck from './Cards';


class App extends Component {

  constructor() {
    super();

    // Load deck
    this.loadDeck = this.loadDeck.bind(this);
    this.state = {
      deck: {},
      playerHand: {},
      computerHand: {},
    }
  }

  startGame() {
    this.loadDeck();
  }

  loadDeck() {
    this.setState({
      deck: cardsDeck,
    })
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
