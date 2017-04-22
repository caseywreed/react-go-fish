import React from 'react'
import Card from './Card'
// Is this going to be a "dumb" component?

class Hand extends React.Component {

    // Should we put our logic here for deciding whether the hand is 
    // the player's or the computer's?

    render() {
        return (
            <div className='hand-wrapper'>
                <ul className="list-of-fishes">
                {
                Object
                    .keys(this.props.hand)
                    .map(key => <Card key={key} suit={this.props.hand[key].suit} value={this.props.hand[key].value} />)
                }
                </ul>
            </div>
        )
    }

}

export default Hand