import { useState } from 'react'
import './Chip.scss'
function Chip(props) {
    return (
        <div className={props.className + ' chip-parent'}>
            <i className={props.symbol + " skill-pic"}></i>
            <p>{props.label}</p>
        </div>
    )
}

export default Chip;