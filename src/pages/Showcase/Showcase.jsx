import { useState } from 'react'
import './Showcase.scss'
import Card from '../../components/Card/Card'
import Chip from '../../components/Chip/Chip'
import Button from '../../components/Button/Button'
import Github from '../../components/Github/Github'

export function Showcase() {
    function GoToShowcase1() {
        alert('Showcase 1');
    }
    function GoToShowcase1Github() {
        alert('Showcase 1 Github');
    }
    return (
        <div className='showcase-parent'>
            <p className='showcase-title'>Showcase</p>
            <div className='showcase-body'>
                <div className='showcase-card'>
                    <img className='showcase-pic' src="ball.png?x=ddd4532" alt="" />
                    <div className='showcase-details'>
                        <p className='title'>Basketball Scoreboard UI</p>
                        <p className='brief-description'>Scoreboard User Interface</p>
                        <p className='site'>A Basketball Scoreboard Interface. Fully control game stats, timers and progress of a basketball match. </p>
                        <p className='years'>
                            <Chip className='chips' symbol='devicon-jquery-plain colored' label='Jquery'/>
                            <Chip className='chips' symbol='devicon-sass-original colored' label='Sass'/>
                        </p>
                        <div className="buttons">
                            <Button label='View Website' onClick={GoToShowcase1}></Button>
                            <Github className='github-button' onClick={GoToShowcase1Github}></Github>
                        </div>
                        
                    </div>
                </div> 
                <div className='showcase-card'>
                <img className='showcase-pic' src="vv.png?x=ddd4532" alt="" />
                <div className='showcase-details'>
                    <p className='title'>VarVault Web UI</p>
                    <p className='brief-description'>Dashboard UI for my VarVault API</p>
                    <p className='site'>A Dashboard UI that interatively has the same functionality as the VarVault API. By 
                                        interacting with this Web UI, users doesn't need HTTP Request Managers such as PostMan. </p>
                    <p className='years'>
                        <Chip className='chips' symbol='devicon-react-original colored' label='React'/>
                        <Chip className='chips' symbol='devicon-nodejs-plain colored' label='Node.js'/>
                        <Chip className='chips' symbol='devicon-sass-original colored' label='Sass'/>
        
                    </p>
                    <div className="buttons">
                        <Button label='View Website' onClick={GoToShowcase1}></Button>
                        <Github className='github-button' onClick={GoToShowcase1Github}></Github>
                    </div>
                </div>
            </div>     
                
            </div>         
        </div>
    )
}

export function ShowcaseR() {
    function GoToShowcase1() {
        alert('Showcase 1');
    }
    function GoToShowcase1Github() {
        alert('Showcase 1 Github');
    }
    return (
        <div className='showcase-parent'>
            <div className='showcase-card'>
                    <img className='showcase-pic' src="varvault.png?x=ddd453ss2" alt="" />
                    <div className='showcase-details'>
                        <p className='title'>VarVault API</p>
                        <p className='brief-description'>Share Information between Devices API</p>
                        <p className='site'>Varvault API can be used for Embedded board device IoT projects, providing a functionality for monitoring sensor variables or data, 
                                            controlling logics, and managing parameters remotely over the Internet. </p>
                        <p className='years'>
                            <Chip className='chips' symbol='devicon-nodejs-plain colored' label='Node.js'/>
                            <Chip className='chips' symbol='devicon-express-original' label='Express.js'/>
                            <Chip className='chips' symbol='devicon-postgresql-plain' label='PostgreSQL'/>
                            <Chip className='chips' symbol='devicon-sass-original colored' label='Sass'/>
          
                        </p>
                        <div className="buttons">
                            <Button label='View Website' onClick={GoToShowcase1}></Button>
                            <Github className='github-button' onClick={GoToShowcase1Github}></Github>
                        </div>
                        
                    </div>
                </div>      
        </div>
    )
}

export default Showcase;