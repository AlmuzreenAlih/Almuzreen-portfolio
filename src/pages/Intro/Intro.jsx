import { useState } from 'react'
import SmallCard from '../../components/SmallCard/SmallCard'
import Button from '../../components/Button/Button'
import './Intro.scss'
export function Intro(props) {
    return (
        <div className='intro-parent'>
            <div className="cell">
                <div>
                    <p className='name'>Hello World, my name is Almuzreen Alih.</p>
                </div>
                <div className='profession'>
                    <p>Software Developer</p>
                </div>
                <div className="explain">
                    <ul>
                        <li>Experienced and Professional Soft&shy;ware Developer</li>
                        <li>Full Stack Web Development En&shy;thu&shy;siast</li>
                        <li>Licensed Electronics Engineer</li>
                    </ul>
                </div>
                <div className="stats">
                    <SmallCard number='107' label='Projects Done' />
                    <SmallCard number='5yrs' label='Experience' />
                    <SmallCard number='4' label='Certificates' />
                    <SmallCard number='3' label='Showcases' />
                </div>
            </div>

            <div className="cell cell-2nd">
                <img className='profile-pic' src="mypic.jpg" alt="" />
            </div>
        </div>
        
    )
}

export function IntroR() {
    return (
        <>
            
        </>
    )
}