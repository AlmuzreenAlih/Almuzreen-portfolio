import { useState, useRef, useEffect } from 'react'
import './HomePage.scss'
import { Intro, IntroR } from '../Intro/Intro'
import RightPane from '../../components/RightPane/RightPane'
import LeftPane from '../../components/LeftPane/LeftPane'
import { Education, EducationR } from '../Education/Education'
import { Certificates, CertificatesR } from '../Certificates/Certificates'
import { Skills, SkillsR } from '../Skills/Skills'
import { Showcase, ShowcaseR } from '../Showcase/Showcase'

function HomePage() {
    const [aHome, setAHome] = useState("#4990e3");
    const [aEduc, setAEduc] = useState("white");
    const [aCert, setACert] = useState("white");
    const [aSkil, setASkil] = useState("white");
    const [aShow, setAShow] = useState("white");
    
    const [LeftPane1_Left, setLeftPane1_Left] = useState("left-pane left-show");
    const [RightPane1_Left, setRightPane1_Left] = useState("73%");

    const [LeftPane2_Left, setLeftPane2_Left] = useState("left-pane left-hidden");
    const [RightPane2_Left, setRightPane2_Left] = useState("200%");

    const [LeftPane3_Left, setLeftPane3_Left] = useState("left-pane left-hidden");
    const [RightPane3_Left, setRightPane3_Left] = useState("200%");

    const [LeftPane4_Left, setLeftPane4_Left] = useState("left-pane left-hidden");
    const [RightPane4_Left, setRightPane4_Left] = useState("200%");

    const [LeftPane5_Left, setLeftPane5_Left] = useState("left-pane left-hidden");
    const [RightPane5_Left, setRightPane5_Left] = useState("200%");

    function HidePanes() {
        setLeftPane1_Left("left-pane left-hidden"); setAHome("white");
        setRightPane1_Left("200%");
        setLeftPane2_Left("left-pane left-hidden"); setAEduc("white");
        setRightPane2_Left("200%");
        setLeftPane3_Left("left-pane left-hidden"); setACert("white");
        setRightPane3_Left("200%");
        setLeftPane4_Left("left-pane left-hidden"); setASkil("white");
        setRightPane4_Left("200%");
        setLeftPane5_Left("left-pane left-hidden"); setAShow("white");
        setRightPane5_Left("200%");
    }

    function ShowHome() {
        HidePanes(); setAHome("#4990e3");
        setLeftPane1_Left("left-pane left-show");
        setRightPane1_Left("73%");
    }
    
    function ShowEducation() {
        HidePanes(); setAEduc("#4990e3");
        setLeftPane2_Left("left-pane left-show");
        setRightPane2_Left("73%");
    }
    
    function ShowCertificates() {
        HidePanes(); setACert("#4990e3");
        setLeftPane3_Left("left-pane left-show");
        setRightPane3_Left("73%");
    }

    function ShowSkills() {
        HidePanes(); setASkil("#4990e3");
        setLeftPane4_Left("left-pane left-show");
        setRightPane4_Left("73%");
    }

    function ShowShowcase() {
        HidePanes(); setAShow("#4990e3");
        setLeftPane5_Left("left-pane left-show");
        setRightPane5_Left("73%");
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
                <a href="#"             style={{color: aHome}} onClick={ShowHome}        >Home</a>
                <a href="#Skills"       style={{color: aSkil}} onClick={ShowSkills}      >Skills</a>
                <a href="#Showcase"     style={{color: aShow}} onClick={ShowShowcase}    >Showcase</a>
                {/* <a href="#">Experience</a> */}
                <a href="#Certificates" style={{color: aCert}} onClick={ShowCertificates}>Certificates</a>
                <a href="#Education"    style={{color: aEduc}} onClick={ShowEducation}   >Education</a>
                {/* <a href="#">Past Projects</a> */}
            </div>

            <LeftPane style={{ top: "15vh", height: "70vh"}}
                      className={LeftPane1_Left} >
                <Intro HidePanes={HidePanes} GoToShowcase={ShowShowcase}/>
            </LeftPane>

            <RightPane style={{top: "50%", left: RightPane1_Left}}
                       className='right-pane' >
                <IntroR />
            </RightPane>

            <LeftPane style={{top: "15vh"}}
                      className={LeftPane2_Left} >
                <Education />
            </LeftPane>

            <RightPane style={{top: "50vh", left: RightPane2_Left}}
                       className='right-pane' >
                <EducationR />
            </RightPane>

            <LeftPane style={{top: "15vh"}}
                      className={LeftPane3_Left} >
                <Certificates />
            </LeftPane>

            <RightPane style={{top: "50%", left: RightPane3_Left}}
                       className='right-pane' >
                <CertificatesR />
            </RightPane>

            {/* <LeftPane style={{top: "50%"}}
                      className={LeftPane4_Left} >
                <Skills />
            </LeftPane>

            <RightPane style={{top: "50%", left: RightPane4_Left}}
                       className='right-pane' >
                <SkillsR />
            </RightPane> */}

            <LeftPane style={{top: "15vh"}}
                      className={LeftPane5_Left} >
                <Showcase />
            </LeftPane>

            <RightPane style={{top: "50%", left: RightPane5_Left}}
                       className='right-pane' >
                <ShowcaseR />
            </RightPane>
        </div>
    )
}

export default HomePage;