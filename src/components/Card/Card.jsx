import { useState } from 'react'
import './Card.scss'

function Card(props) {
    return (
        <div className={"card-parent " + props.className}>
            {props.children}
        </div>
    )
}

export default Card;