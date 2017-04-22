import React from 'react'
import Hand from './Hand'
import Deck from './Deck'
import cardsDeck from '../Cards'

import { removeByKey, getRandomKey } from '../helpers.js'

class Game extends React.Component {

  constructor() {
    super();

    this.startGame = this.startGame.bind(this)
    this.loadDeck = this.loadDeck.bind(this)
    this.dealHands = this.dealHands.bind(this)
    this.dealCard = this.dealCard.bind(this)

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
    // Get a copy of the current state
    let deck = { ...this.state.deck }
    let keys = Object.keys(deck)
    let playerHand = {}
    let computerHand = {}
    // Deal PLAYER hand
    for (let i = 0; i < 7; i++) {
      // Get a random card's key
      let randomCardKey = getRandomKey(keys)
      // Find its index for later cleanup
      let keyIndex = keys.indexOf(randomCardKey)
      // Set the card to a new instance on a new player hand object
      playerHand[randomCardKey] = deck[randomCardKey]
      // Remove the key from the keys array so it can't be picked again
      keys.splice(keyIndex, 1)
      // Remove the object with the key from the deck variable to set state later
      deck = removeByKey(deck, randomCardKey)
    }
    // Deal COMPUTER hand
    for (let i = 0; i < 7; i++) {
      let randomCardKey = getRandomKey(keys)
      let keyIndex = keys.indexOf(randomCardKey)
      computerHand[randomCardKey] = deck[randomCardKey]
      keys.splice(keyIndex, 1)
      deck = removeByKey(deck, randomCardKey)
    }
    this.setState({ deck, playerHand, computerHand })
  }

  dealCard(player) {
    // Take copies of the current state for the deck
    // and the selected player
    let hand = {...this.state[player]}
    let deck = { ...this.state.deck }
    const keys = Object.keys(deck)
    // Select a random key
    const randomCardKey = getRandomKey(keys)
    const newDeck = removeByKey(deck, randomCardKey)
    const newCard = deck[randomCardKey]
    hand[randomCardKey] = newCard
    this.setState({ deck, [player]: hand })
  }

    render() {
        return (
            <div className='game-wrapper'>
                <Hand hand={this.state.computerHand} mode='computer'/>
                <Deck />
                <Hand hand={this.state.playerHand} mode='player'/>
                <button onClick={this.startGame}>Start Game</button>
                <button onClick={() => this.dealCard('playerHand')}>Deal Card to Player</button>
                <button onClick={() => this.dealCard('computerHand')}>Deal Card to Computer</button>
            </div>
        )
    }

}

export default Game