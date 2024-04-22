import { useState } from 'react'
import './Skills.scss'
import Card from '../../components/Card/Card'

export function Skills() {
    function SkillCard(props) {
        return (
            <div className='skill-card'>
                {props.children}
            </div>
        )
    }
    return (
        <div className='skills-parent'>
            <p className='skills-title'>Core Skills</p>
            <div className='skills-body'>
                <SkillCard>
                    <i className="devicon-react-original colored skill-pic"></i>
                    <div className="skill-name">
                        React
                    </div>
                </SkillCard>

                <SkillCard>
                    <i className="devicon-nodejs-plain-wordmark colored skill-pic"></i>
                    <div className="skill-name">
                        Node.js
                    </div>
                </SkillCard>

                <SkillCard>
                    <i class="devicon-express-original-wordmark skill-pic"></i>
                    <div className="skill-name">
                        Express.js
                    </div>
                </SkillCard>

                <SkillCard>
                    <i className="devicon-postgresql-plain colored skill-pic"></i>
                    <div className="skill-name">
                        PostgreSQL
                    </div>
                </SkillCard>

                <SkillCard>
                    <i className="devicon-sass-original colored skill-pic"></i>
                    <div className="skill-name">
                        Sass
                    </div>
                </SkillCard>          
            </div>
        </div>
    )
}

export function SkillsR() {
    return (
        <div className='skills-parent'>
            <img className='profile-pic' src="eng_team.svg" alt="" />
        </div>
    )
}

export default Skills;