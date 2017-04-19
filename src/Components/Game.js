import React from 'react'
import Hand from './Hand'
import Deck from './Deck'
import Card from './Card'

class Game extends React.Component {

    render() {
        return (
            <div className='game-wrapper'>
                <h1>GAME COMPONENT</h1>
                <Hand />
                <Deck />
                <Hand />
                <button onClick={this.props.startGame}>Start Game</button>
            </div>
        )
    }

}

export default Game