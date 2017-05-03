import React from 'react'
import Hand from './Hand'
import Deck from './Deck'
import TurnDisplay from './TurnDisplay'
import cardsDeck from '../Cards'

import { removeByKey, getRandomKey } from '../helpers.js'

class Game extends React.Component {

  constructor() {
    super();

    this.startGame = this.startGame.bind(this)
    this.loadDeck = this.loadDeck.bind(this)
    this.dealHands = this.dealHands.bind(this)
    this.dealCardToPlayer = this.dealCardToPlayer.bind(this)
    this.dealCardToComputer = this.dealCardToComputer.bind(this)

    this.state = {
      deck: {},
      playerHand: {},
      computerHand: {},
      playerTurn: true
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
    this.setState({
      deck: cardsDeck,
    })
  }

  dealHands() {
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

  dealCardToPlayer() {
    let playerHand = {...this.state.playerHand }
    let deck = { ...this.state.deck }
    const keys = Object.keys(deck)
    const randomCardKey = getRandomKey(keys)
    playerHand[randomCardKey] = deck[randomCardKey]
    deck = removeByKey(deck, randomCardKey)
    this.setState({ deck, playerHand })
  }

  dealCardToComputer() {
    let computerHand = {...this.state.computerHand }
    let deck = { ...this.state.deck }
    const keys = Object.keys(deck)
    const randomCardKey = getRandomKey(keys)
    computerHand[randomCardKey] = deck[randomCardKey]
    deck = removeByKey(deck, randomCardKey)
    this.setState({ deck, computerHand })
  }

    render() {
        return (
            <div className='game-wrapper'>
                <Hand hand={this.state.computerHand} mode='computer'/>
                <Deck />
                <Hand hand={this.state.playerHand} mode='player'/>
                <button onClick={this.startGame}>Start Game</button>
                <button onClick={this.dealCardToPlayer}>Deal Card to Player</button>
                <button onClick={this.dealCardToComputer}>Deal Card to Computer</button>
                <TurnDisplay playerTurn={this.state.playerTurn} />
            </div>
        )
    }

}

export default Game