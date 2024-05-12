import { useState, useRef } from 'react'
import './Header.scss'
function Header(props) {
    let lastScrollTop = 0;
    const headerToolbar = useRef(null);
    let currentScroll;
    window.addEventListener("scroll", function() {
        currentScroll = window.scrollY || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            headerToolbar.current.classList.remove("colorize");
            headerToolbar.current.classList.add("ht-hide");
            
        } else if (currentScroll == 0) {
            headerToolbar.current.classList.remove("colorize");
            headerToolbar.current.classList.remove("ht-hide");
        } else {
            headerToolbar.current.classList.add("colorize");
            headerToolbar.current.classList.remove("ht-hide");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);

    window.addEventListener("mousemove", function(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        if (mouseY < 80) {
            if (currentScroll > 0) {
                headerToolbar.current.classList.add("colorize");
            } else {
                headerToolbar.current.classList.remove("colorize");
            }
            headerToolbar.current.classList.remove("ht-hide");
        }
    });
    
    const [aHome, setAHome] = useState("#4990e3");
    const [aEduc, setAEduc] = useState("white");
    const [aCert, setACert] = useState("white");
    const [aSkil, setASkil] = useState("white");
    const [aShow, setAShow] = useState("white");

    function ShowHome() {
        
    }
    
    function ShowEducation() {
        
    }
    
    function ShowCertificates() {

    }

    function ShowSkills() {
        
    }

    function ShowShowcase() {
        
    }
    return (
        <div ref={headerToolbar} className="header-toolbar">
            {!props.isMobile ? <div className="logo">{/* &lt;/&gt; */}
                <p className='typewriter' >
                     AA
                     {/* <span style={{fontSize: "32px"}} class="material-symbols-outlined">verified </span> */}
                    
                    </p>
            </div> : null}
            <a href="#"             style={{color: aHome}} onClick={ShowHome}        >Home</a>
            <a href="#Skills"       style={{color: aSkil}} onClick={ShowSkills}      >Skills</a>
            <a href="#Showcase"     style={{color: aShow}} onClick={ShowShowcase}    >Showcase</a>
            {/* <a href="#">Experience</a> */}
            <a href="#Past" style={{color: aCert}} onClick={ShowCertificates}>Past Projects</a>
            <a href="#Contact" style={{color: aCert}} onClick={ShowCertificates}>Contact</a>
            {/* <a href="#Education"    style={{color: aEduc}} onClick={ShowEducation}   >Education</a> */}
            {/* <a href="#">Past Projects</a> */}
        </div>
    )
}

export default Header;