import { useState } from 'react'
import './SkillCard2.scss'

function SkillCard2(props) {
    return (
        <div className='skill-card2'>
            { props.src ? <img className="skill-pic2" src={props.src} /> : null }
            { props.className ? <i className={props.className + " skill-pic2"}></i> : null }

            <div className="skill-name2">
                {props.name}
            </div>
        </div>
    )
}

export default SkillCard2;