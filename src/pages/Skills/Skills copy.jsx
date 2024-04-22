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
                {/* <SkillCard>
                    <i className="devicon-html5-plain colored skill-pic"></i>
                    <div className="skill-name">
                        HTML5
                    </div>
                </SkillCard>

                <SkillCard>
                    <i className="devicon-css3-plain colored skill-pic"></i>
                    <div className="skill-name">
                        CSS
                    </div>
                </SkillCard> */}
                
                <SkillCard>
                    <i className="devicon-sass-original colored skill-pic"></i>
                    <div className="skill-name">
                        Sass
                    </div>
                </SkillCard>          

                <SkillCard>
                    <i className="devicon-javascript-plain colored skill-pic"></i>
                    <div className="skill-name">
                        JavaScript
                    </div>
                </SkillCard>

                <SkillCard>
                    <i className="devicon-jquery-plain colored skill-pic"></i>
                    <div className="skill-name">
                        Jquery
                    </div>
                </SkillCard>

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

                {/* <SkillCard>
                    <i class="devicon-express-original-wordmark skill-pic"></i>
                    <div className="skill-name">
                        Express.js
                    </div>
                </SkillCard> */}

                <SkillCard>
                    <i className="devicon-php-plain colored skill-pic"></i>
                    <div className="skill-name">
                        PHP
                    </div>
                </SkillCard>

                {/* <SkillCard>
                    <i className="devicon-mysql-original skill-pic"></i>
                    <div className="skill-name">
                        MySQL
                    </div>
                </SkillCard> */}

                <SkillCard>
                    <i className="devicon-postgresql-plain colored skill-pic"></i>
                    <div className="skill-name">
                        PostgreSQL
                    </div>
                </SkillCard>

                {/* <SkillCard>
                    <i className="devicon-sqlite-plain colored skill-pic"></i>
                    <div className="skill-name">
                        SQLite3
                    </div>
                </SkillCard> */}

                {/* <SkillCard>
                    <i class="devicon-git-plain colored skill-pic"></i>
                    <div className="skill-name">
                        Git
                    </div>
                </SkillCard> */}

                <SkillCard>
                    <img className="skill-pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                    <div className="skill-name">
                        C++
                    </div>
                </SkillCard>

                <SkillCard>
                    <img className="skill-pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                    <div className="skill-name">
                        Python
                    </div>
                </SkillCard>

                {/* <SkillCard>
                    <i className="devicon-visualbasic-plain colored skill-pic"></i>
                    <div className="skill-name">
                        VB.Net
                    </div>
                </SkillCard> */}

                {/* <SkillCard>
                    
                    <img className="skill-pic" src="b4a.png" />
                    <div className="skill-name">
                        B4Android
                    </div>
                </SkillCard> */}

                {/* <SkillCard>
                    <i class="devicon-arduino-plain colored skill-pic"></i>
                    <div className="skill-name">
                        Arduino
                    </div>
                </SkillCard> */}

                {/* <SkillCard>
                    <img className="skill-pic" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg" />
                    <div className="skill-name">
                        RPi
                    </div>
                </SkillCard> */}

                {/* <SkillCard>
                    <i class="devicon-opencv-plain colored skill-pic"></i>
                    <div className="skill-name">
                        OpenCV
                    </div>
                </SkillCard> */}
          
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