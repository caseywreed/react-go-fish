import React from 'react'
import cardback from '../img/cardback.png'

class Deck extends React.Component {

  render() {
    return (
        <div className="deck">
            <img src={cardback} alt="The Deck of Cards" className="cardback" />
        </div>
    )
  }

}

export default Deck