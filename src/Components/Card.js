import React from 'react'

    function Card(props) {
        return (
            <button className='card' onClick={ () => console.log(props) }>
                {props.suit} {props.value}
            </button>
        )
    }

export default Card;