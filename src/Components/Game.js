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
                <Card value='K' suit='D'/>
            </div>
        )
    }

}

export default Game