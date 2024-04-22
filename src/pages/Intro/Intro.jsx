import { useState } from 'react'
import SmallCard from '../../components/SmallCard/SmallCard'
import Button from '../../components/Button/Button'

export function Intro(props) {
    return (
        <>
            <div>
                <p className='name'>Hello World, my name is Almuzreen Alih.</p>
            </div>
            <div className='profession'>
                <p>Software Developer</p>
            </div>
            <div className="explain">
                <ul>
                    <li>Experienced and Professional Software Developer</li>
                    <li>Full Stack Web Development Enthusiast</li>
                    <li>Licensed Electronics Engineer</li>
                </ul>
            </div>
            <div className="stats">
                <SmallCard number='107' label='Projects Done' />
                <SmallCard number='5yrs' label='Experience' />
                <SmallCard number='4' label='Certificates' />
                <SmallCard number='3' label='Showcases' />
            </div>
            {/* <div className="buttons">
                <Button style={{width: "120px", textAlign: "center", fontSize: "1.15rem", marginRight: "1rem"}} 
                        label='Skills' onClick={props.GoToShowcase}></Button>
                <Button style={{width: "120px", textAlign: "center", fontSize: "1.15rem", marginRight: "1rem"}} 
                        label='Showcase' onClick={props.GoToShowcase}></Button>
            </div> */}
        </>
    )
}

export function IntroR() {
    return (
        <>
            <img className='profile-pic' src="https://avatars.githubusercontent.com/u/111932402?s=400&u=fb9d24110b589aa354c4ab609c51936181bb5dd2&v=4" alt="" />
        </>
    )
}