import { useState } from 'react'
import './Showcase.scss'
import Card from '../../components/Card/Card'
import Chip from '../../components/Chip/Chip'
import Button from '../../components/Button/Button'
import Github from '../../components/Github/Github'
import ScreenshotsButton from '../../components/ScreenshotsButton/ScreenshotsButton'

export function Showcase(props) {
    function GoToShowcase1() {
        window.open("https://basketball-scoreboard.almuzreen-page.online/", "_blank");
    }
    function GoToShowcase1Github() {
        window.open("https://github.com/AlmuzreenAlih/basketball-game-scoreboard-web-gui", "_blank");
    }
    function GoToShowcase2() {
        alert("This showcase is on a render.com free account, Render will spin down my free instance after long period of inactivity. Just in case of long period of inactivity, kindly wait for 50 secs for the restarting of the free instance.");
        window.open("https://varvault-web-ui.onrender.com/", "_blank");
    }
    function GoToShowcase2Github() {
        window.open("https://github.com/AlmuzreenAlih/varvault-api", "_blank");
    }
    function GoToShowcase3() {
        window.open("https://varvaultweb.almuzreen-page.online/", "_blank");
    }
    function GoToShowcase3Github() {
        window.open("https://github.com/AlmuzreenAlih/varvault-web-ui", "_blank");
    }
    
    return (
        <div id='Showcase' className='showcase-parent'>
            <p className='showcase-title'>Showcase</p>
            <p className='showcase-title2'>uhmm... what have I done?</p>
            <div className='showcase-body'>
                <div className='showcase-row'>
                    <img className='showcase-pic' src={props.imagesSH1[0]} alt="" />
                    <div className='showcase-card'>
                        
                        <div className='showcase-details'>
                            <p className='title'>Basketball Scoreboard UI</p>
                            <p className='brief-description'>Scoreboard User Interface</p>
                            <p className='site'>A Basketball Scoreboard Interface. Fully control game stats, timers and progress of a basketball match. </p>
                            <div className='years'>
                                <Chip className='chips' symbol='devicon-jquery-plain colored' label='Jquery'/>
                                <Chip className='chips' symbol='devicon-sass-original colored' label='Sass'/>
                            </div>
                            <div className="buttons">
                                <Button label='View Website' onClick={GoToShowcase1}></Button>
                                <Github className='github-button' onClick={GoToShowcase1Github}></Github>
                                <ScreenshotsButton images={props.imagesSH1} onClick={props.setImagesSH1}/>
                            </div>
                        </div>
                    </div> 
                </div>

                <div className='showcase-row'>
                    <img className='showcase-pic' src={props.imagesSH2[0]} alt="" />
                    <div className='showcase-card'>
                        <div className='showcase-details'>
                            <p className='title'>VarVault API</p>
                            <p className='brief-description'>Easy Database API</p>
                            <p className='site'>Without coding knowledge for backend development, users can use Varvault API for Embedded board device IoT projects, providing a functionality for creating variables for monitoring sensor readings, 
                                                controlling logics, and managing parameters remotely over the Internet. </p>
                            <div className='years'>
                                <Chip className='chips' symbol='devicon-nodejs-plain colored' label='Node.js'/>
                                <Chip className='chips' symbol='devicon-express-original' label='Express.js'/>
                                <Chip className='chips' symbol='devicon-postgresql-plain' label='PostgreSQL'/>
                                <Chip className='chips' symbol='devicon-sass-original colored' label='Sass'/>
            
                            </div>
                            <div className="buttons">
                                <Button label='View Website' onClick={GoToShowcase2}></Button>
                                <Github className='github-button' onClick={GoToShowcase2Github}></Github>
                                <ScreenshotsButton images={props.imagesSH2} onClick={props.setImagesSH2}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='showcase-row'>
                    <img className='showcase-pic' src={props.imagesSH3[0]} alt="" />
                    <div className='showcase-card'>
                        <div className='showcase-details'>
                            <p className='title'>VarVault Web UI</p>
                            <p className='brief-description'>Dashboard UI for my VarVault API</p>
                            <p className='site'>A Dashboard UI that has the same functionality as the VarVault API. By 
                                                interacting with this Web UI, users can manage their account, variables and generated tokens. </p>
                            <div className='years'>
                                <Chip className='chips' symbol='devicon-react-original colored' label='React'/>
                                <Chip className='chips' symbol='devicon-nodejs-plain colored' label='Node.js'/>
                                <Chip className='chips' symbol='devicon-sass-original colored' label='Sass'/>
                
                            </div>
                            <div className="buttons">
                                <Button label='View Website' onClick={GoToShowcase3}></Button>
                                <Github className='github-button' onClick={GoToShowcase3Github}></Github>
                                <ScreenshotsButton images={props.imagesSH3} onClick={props.setImagesSH3}
                                                darker={true}/>
                            </div>
                        </div>
                    </div>  
                </div>

                {props.isMobile && <><br></br><br></br><br></br></>}  
            </div>         
        </div>
    )
}

export function ShowcaseR(props) {
    function GoToShowcase2() {
        alert("This showcase is on a render.com free account, Render will spin down my free instance after long period of inactivity. Just in case of long period of inactivity, kindly wait for 50 secs for the restarting of the free instance.");
        window.open("https://varvault-web-ui.onrender.com/", "_blank");
    }
    function GoToShowcase2Github() {
        window.open("https://github.com/AlmuzreenAlih/varvault-api", "_blank");
    }
    return (
        <div className='showcase-parent'>
                <div className='showcase-card'>
                    <img className='showcase-pic' src="varvault.png?x=ddd453ss2" alt="" />
                    <div className='showcase-details'>
                        <p className='title'>VarVault API</p>
                        <p className='brief-description'>Easy Database API</p>
                        <p className='site'>Without coding knowledge for backend development, users can use my Varvault API for their Embedded board device IoT projects, providing a functionality for creating remote variables for monitoring sensor readings, 
                                            controlling logics, and managing parameters remotely over the Internet. </p>
                        <div className='years'>
                            <Chip className='chips' symbol='devicon-nodejs-plain colored' label='Node.js'/>
                            <Chip className='chips' symbol='devicon-express-original' label='Express.js'/>
                            <Chip className='chips' symbol='devicon-postgresql-plain' label='PostgreSQL'/>
                            <Chip className='chips' symbol='devicon-sass-original colored' label='Sass'/>
          
                        </div>
                        <div className="buttons">
                            <Button label='View Website' onClick={GoToShowcase2}></Button>
                            <Github className='github-button' onClick={GoToShowcase2Github}></Github>
                            <ScreenshotsButton images={props.imagesSH2} onClick={props.setImagesSH2}/>
                        </div>
                        
                    </div>
                </div>      
        </div>
    )
}

export default Showcase;