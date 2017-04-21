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

  // Kind of like an init function
  // Be sure to read all about lifecycle
  // In general:
  // Initial, getDefaultProps, getInitialState, componentWillMount, render, componentDidMount
  // You cannot / should not setState() in a component that hasn't been mounted
  componentDidMount() {
    this.loadDeck()
  }

  startGame() {
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
    let deck = { ...this.state.deck }
    let keys = Object.keys(deck)
    let playerHand = {}
    let computerHand = {}
    for (let i = 0; i < 7; i++) {
      // Get a random card's key
      let randomCardKey = keys[Math.floor(Math.random() * keys.length)]
      // Find its index for later cleanup
      let keyIndex = keys.indexOf(randomCardKey)
      // Set the card to a new instance on a new player hand object
      playerHand[randomCardKey] = deck[randomCardKey]
      // Remove the key from the keys array so it can't be picked again
      keys.splice(keyIndex, 1)
      // Remove the object with the key from the deck variable to set state later
      deck = this.removeByKey(deck, randomCardKey)
    }
    // Do the exact same thing for the computer opponent
    for (let i = 0; i < 7; i++) {
      let randomCardKey = keys[Math.floor(Math.random() * keys.length)]
      let keyIndex = keys.indexOf(randomCardKey)
      computerHand[randomCardKey] = deck[randomCardKey]
      keys.splice(keyIndex, 1)
      deck = this.removeByKey(deck, randomCardKey)
    }
    this.setState({ deck, playerHand, computerHand })
  }

  dealCard(player) {
    // Take copies of the current state for the deck
    // and the selected player
    let hand = {...player}
    let deck = { ...this.state.deck }
    console.log({hand})
    const keys = Object.keys(deck)
    // Select a random key
    const randomCardKey = keys[Math.floor(Math.random() * keys.length)]
    const newDeck = this.removeByKey(deck, randomCardKey)
    const newCard = deck[randomCardKey]
    hand[randomCardKey] = newCard
    console.log(newDeck)
    if (player === 'playerHand') {
      this.setState( {deck: newDeck, playerHand: hand} )
    } else {
      this.setState( {deck: newDeck, computerHand: hand} )
    }
  }

  removeByKey(myObj, deleteKey) {
    return Object.keys(myObj)
      .filter(key => key !== deleteKey)
      .reduce((result, current) => {
        result[current] = myObj[current];
        return result;
      }, {})
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
