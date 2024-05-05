import { useState } from 'react'
import './Services.scss'
function Services() {
    return (
        <div className="services-parent">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className="title">My Services</div>
            <div className="cells">
                <div className="cell">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <span class="icon material-symbols-outlined">terminal</span>
                    <p className='name'>Software Development</p>
                </div>
                <div className="cell">
                    <span class="icon material-symbols-outlined">language</span>
                    <p className='name'>Web Development</p>
                </div>
                <div className="cell">
                    <span class="icon material-symbols-outlined">memory</span>
                    <p className='name'>Embedded Systems</p>
                </div>
            </div>
            
        </div>
    )
}

export default Services;