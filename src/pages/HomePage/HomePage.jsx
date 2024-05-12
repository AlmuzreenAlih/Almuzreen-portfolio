import { useState, useRef, useEffect } from 'react'
import './HomePage.scss'
import { Intro, IntroR } from '../Intro/Intro'
import RightPane from '../../components/RightPane/RightPane'
import LeftPane from '../../components/LeftPane/LeftPane'
import { Education, EducationR } from '../Education/Education'
import { Certificates, CertificatesR } from '../Certificates/Certificates'
import { Skills, SkillsR } from '../Skills/Skills'
import { Showcase, ShowcaseR } from '../Showcase/Showcase'
import ImagesCarousel from '../../components/ImagesCarousel/ImagesCarousel'
import Services from '../Services/Services'
import Header from '../Header/Header';
import PastProjects from '../PastProjects/PastProjects';
import Contact from '../Contact/Contact';

function HomePage() {
    const leftShowValueDesktop = "60px";
    const leftShowValueMobile = "";

    const [isMobile, setIsMobile] = useState(false);
    const [resizedHooked, setResizedHooked] = useState(false);
    useEffect(() => {
        setResizedHooked(true);
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 1000); // Set the breakpoint as per your requirement
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {window.removeEventListener('resize', handleResize);};
      }, []);

    const imagesSH1 = ["sh1/ss1.webp","sh1/ss2.webp","sh1/ss3.webp","sh1/ss4.webp"]
    const imagesSH2 = ["sh2/ss1.webp","sh2/ss2.webp","sh2/ss3.webp","sh2/ss4.webp","sh2/ss5.webp","sh2/ss6.webp"]
    const imagesSH3 = ["sh3/ss1.webp","sh3/ss2.webp","sh3/ss3.webp","sh3/ss4.webp"]
    const [images, setImages] = useState(["sh1/ss1.webp"])
    function setImagesSH1() {
        setCarouselShown(true);
        setImages(imagesSH1);
    }
    function setImagesSH2() {
        setCarouselShown(true);
        setImages(imagesSH2);
    }
    function setImagesSH3() {
        setCarouselShown(true);
        setImages(imagesSH3);
    }
    const [carouselShown, setCarouselShown] = useState(false);
    return (
        <>
        {resizedHooked ?
            <div className='homepage-parent'>
                {carouselShown && <ImagesCarousel images={images} setCarouselShown={setCarouselShown}/>}
                
                <div className="background-div">
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
                </div>
                
                <Header isMobile={isMobile}/>
                <Intro/>
                <Services />
                <Skills />
                <Showcase isMobile={isMobile} imagesSH1={imagesSH1} imagesSH2={imagesSH2} imagesSH3={imagesSH3}
                            images={images} setImages={setImages}
                            setImagesSH1={setImagesSH1} setImagesSH2={setImagesSH2} setImagesSH3={setImagesSH3} />
                <PastProjects />
                <Contact />
                {/* <LeftPane style={{ top: !isMobile ? "50vh" : "40vh", left: !isMobile? LeftPane1_Left : LeftPane1_Left_M, 
                                transform: !isMobile ? "translate(0%,-50%)" : "translate(0%,0%)"}}
                        className='left-pane' >
                    <Intro HidePanes={HidePanes} GoToShowcase={ShowShowcase}/>
                </LeftPane>


                <RightPane style={{top: !isMobile ? "50vh" : "13vh", 
                                   left: !isMobile ? RightPane1_Left : RightPane1_Left_M}}
                            className='right-pane' >
                    <IntroR />
                </RightPane>

                <LeftPane style={{top: "15vh", left: !isMobile? LeftPane2_Left : LeftPane2_Left_M}}
                        className='left-pane' >
                    <Education />
                </LeftPane>

                {!isMobile && <RightPane style={{top: "50%", left: RightPane2_Left}}
                        className='right-pane' >
                    <EducationR />
                </RightPane>}

                <LeftPane style={{top: "15vh", left: !isMobile? LeftPane3_Left : LeftPane3_Left_M}}
                        className='left-pane' >
                    <Certificates />
                </LeftPane>

                {!isMobile && <RightPane style={{top: "50%", left: RightPane3_Left}}
                        className='right-pane' >
                    <CertificatesR />
                </RightPane>}

                <LeftPane style={{top: "15vh", left: !isMobile? LeftPane4_Left : LeftPane4_Left_M}}
                        className='left-pane' >
                    <Skills />
                </LeftPane>

                {!isMobile && <RightPane style={{top: "50%", left: RightPane4_Left}}
                        className='right-pane' >
                    <SkillsR />
                </RightPane>}

                <LeftPane style={{top: "15vh", left: !isMobile? LeftPane5_Left : LeftPane5_Left_M}}
                        className='left-pane' >
                    <Showcase isMobile={isMobile} imagesSH1={imagesSH1} imagesSH2={imagesSH2} imagesSH3={imagesSH3}
                            images={images}
                            setImages={setImages}
                            setImagesSH1={setImagesSH1} setImagesSH2={setImagesSH2} setImagesSH3={setImagesSH3} />
                </LeftPane>

                {!isMobile && <RightPane style={{top: "50%", left: RightPane5_Left}}
                        className='right-pane' >
                    <ShowcaseR imagesSH1={imagesSH1} imagesSH2={imagesSH2} imagesSH3={imagesSH3}
                            images={images}
                            setImages={setImages}
                            setImagesSH1={setImagesSH1} setImagesSH2={setImagesSH2} setImagesSH3={setImagesSH3} />
                </RightPane>} */}
            </div>
        : null}
        </>
    )
}

export default HomePage;