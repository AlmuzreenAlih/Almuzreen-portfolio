import { useState } from 'react'
import './SmallCard.scss'

function SmallCard(props) {
    return (
        <div className="small-card-parent">
            <span className='header'>
                <div className='min'>A</div>
                <div className='max'>A</div>
                <div className='close'>X</div>
            </span>
            <span className="body">
                <p className='number'>{props.number}</p>
                <p className='label'>{props.label}</p>
            </span>
        </div>
    )
}

export default SmallCard;