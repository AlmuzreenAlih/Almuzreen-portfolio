import { useState } from 'react'
import './Button.scss'

function Button(props) {
    return (
        <div className={props.className + ' button-parent'} style={{...props.style}} onClick={props.onClick}>
            {props.label}
        </div>
    )
}

export default Button;