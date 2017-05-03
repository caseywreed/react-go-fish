import React from 'react'

    function TurnDisplay(props) {
        return (
            <div className="hand">
                {props.playerTurn ? (
                    <h1>Your Turn</h1>
                ) : (
                    <h1>Computer Turn</h1>
                    )}
            </div>
        )

    }

export default TurnDisplay