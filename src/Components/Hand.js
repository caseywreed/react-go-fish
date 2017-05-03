import React from 'react'
import Card from './Card'
import cardback from '../img/cardback.png'

class Hand extends React.Component {

    render() {
        const isPlayerHand = this.props.mode
        console.log(this.props)
        return (
            <div className="hand">
                {isPlayerHand === 'player' ? (
                    <ul className="list-of-cards" >
                        {
                            Object
                                .keys(this.props.hand)
                                .map(key => <Card key={key} suit={this.props.hand[key].suit} value={this.props.hand[key].value} />)
                        }
                    </ul >
                ) : (
                    <ul className="list-of-cards" >
                        {
                            Object
                                .keys(this.props.hand)
                                .map(key => <img key={key} src={cardback} className="cardback" alt="Your Oppoent's Card"/>)
                        }
                    </ul >
                    )}
            </div>
        )
    }

}

export default Hand