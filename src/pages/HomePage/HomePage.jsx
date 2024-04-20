import { useState, useRef, useEffect } from 'react'
import './HomePage.scss'
import { Intro, IntroR } from '../Intro/Intro'
import RightPane from '../../components/RightPane/RightPane'
import LeftPane from '../../components/LeftPane/LeftPane'
import { Education, EducationR } from '../Education/Education'
import { Certificates, CertificatesR } from '../Certificates/Certificates'
import { Skills, SkillsR } from '../Skills/Skills'

function HomePage() {
    const [LeftPane1_Left, setLeftPane1_Left] = useState("60px");
    const [RightPane1_Left, setRightPane1_Left] = useState("73%");

    const [LeftPane2_Left, setLeftPane2_Left] = useState("-100%");
    const [RightPane2_Left, setRightPane2_Left] = useState("200%");

    const [LeftPane3_Left, setLeftPane3_Left] = useState("-100%");
    const [RightPane3_Left, setRightPane3_Left] = useState("200%");

    const [LeftPane4_Left, setLeftPane4_Left] = useState("-100%");
    const [RightPane4_Left, setRightPane4_Left] = useState("200%");

    function HidePanes() {
        setLeftPane1_Left("-100%"); 
        // setRightPane1_Left("200%");
        setLeftPane2_Left("-100%"); 
        // setRightPane2_Left("200%");
        setLeftPane3_Left("-100%"); 
        // setRightPane3_Left("200%");
        setLeftPane4_Left("-100%"); 
        // setRightPane3_Left("200%");
    }

    function ShowHome() {
        HidePanes();
        setLeftPane1_Left("60px");
        // setRightPane1_Left("73%");
    }
    
    function ShowEducation() {
        HidePanes();
        setLeftPane2_Left("60px");
        // setRightPane2_Left("73%");
    }
    
    function ShowCertificates() {
        HidePanes();
        setLeftPane3_Left("60px");
        // setRightPane3_Left("73%");
    }

    function ShowSkills() {
        HidePanes();
        setLeftPane4_Left("60px");
    }
    return (
        <div className='homepage-parent'>
            <svg className='bg' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 100vh 100vh" width="700" height="700" opacity="1"><defs><filter id="nnnoise-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="linearRGB">
                <feTurbulence type="turbulence" baseFrequency="0.094" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
                <feSpecularLighting surfaceScale="36" specularConstant="0.9" specularExponent="20" lightingColor="#4a90e2" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
                        <feDistantLight azimuth="3" elevation="95"></feDistantLight>
                </feSpecularLighting>
            
            </filter></defs><rect width="100%" height="100%" fill="#010e1eff"></rect><rect width="100%" height="100%" fill="#4a90e2" filter="url(#nnnoise-filter)"></rect></svg>

            <svg className='shapes' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nnneon-grad"><stop stopColor="hsl(185, 53%, 55%)" stopOpacity="1" offset="0%"></stop><stop stopColor="hsl(0, 73%, 55%)" stopOpacity="1" offset="100%"></stop></linearGradient><filter id="nnneon-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="17 8" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter><filter id="nnneon-filter2" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="13 17" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g strokeWidth="23" stroke="url(#nnneon-grad)" fill="none"><path d="M400 236.610107421875L541.5000090417586 318.3050566007448V481.6949549584844L400 563.3899041373543L258.4999909582413 481.6949549584844V318.3050566007448L400 236.610107421875Z " filter="url(#nnneon-filter)"></path><path d="M412 236.610107421875L553.5000090417586 318.3050566007448V481.6949549584844L412 563.3899041373543L270.4999909582413 481.6949549584844V318.3050566007448L412 236.610107421875Z " filter="url(#nnneon-filter2)" opacity="0.25"></path><path d="M388 236.610107421875L529.5000090417586 318.3050566007448V481.6949549584844L388 563.3899041373543L246.4999909582413 481.6949549584844V318.3050566007448L388 236.610107421875Z " filter="url(#nnneon-filter2)" opacity="0.25"></path><path d="M400 236.610107421875L541.5000090417586 318.3050566007448V481.6949549584844L400 563.3899041373543L258.4999909582413 481.6949549584844V318.3050566007448L400 236.610107421875Z "></path></g></svg>
        
            <div className="circle"></div>

            <div className="header-toolbar">
                <div className="logo">&lt;/&gt;</div>
                <a href="#" onClick={ShowHome}>Home</a>
                <a href="#Education" onClick={ShowEducation}>Education</a>
                <a href="#" onClick={ShowCertificates}>Certificates</a>
                <a href="#" onClick={ShowSkills}>Skills</a>
                <a href="#">Showcase</a>
                <a href="#">Past Projects</a>
            </div>

            <LeftPane style={{ top: "50%", left: LeftPane1_Left, transform: "translate(0%,-50%)" }}
                      className='left-pane' >
                <Intro HidePanes={HidePanes}/>
            </LeftPane>

            <RightPane style={{top: "50%", left: RightPane1_Left}}
                       className='right-pane' >
                <IntroR />
            </RightPane>

            <LeftPane style={{top: "15vh", left: LeftPane2_Left}}
                      className='left-pane' >
                <Education />
            </LeftPane>

            <RightPane style={{top: "50%", left: RightPane2_Left}}
                       className='right-pane' >
                <EducationR />
            </RightPane>

            <LeftPane style={{top: "15vh", left: LeftPane3_Left}}
                      className='left-pane' >
                <Certificates />
            </LeftPane>

            <RightPane style={{top: "50%", left: RightPane3_Left}}
                       className='right-pane' >
                <CertificatesR />
            </RightPane>

            <LeftPane style={{top: "15vh", left: LeftPane4_Left}}
                      className='left-pane' >
                <Skills />
            </LeftPane>

            <RightPane style={{top: "50%", left: RightPane4_Left}}
                       className='right-pane' >
                <SkillsR />
            </RightPane>
        </div>
    )
}

export default HomePage;