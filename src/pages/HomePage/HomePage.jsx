import { useState } from 'react'
import './HomePage.scss'

function HomePage() {
    return (
        <div className='homepage-parent'>
            <svg className='bg' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 100vh 100vh" width="700" height="700" opacity="1"><defs><filter id="nnnoise-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
                <feTurbulence type="turbulence" baseFrequency="0.094" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
                <feSpecularLighting surfaceScale="36" specularConstant="0.9" specularExponent="20" lighting-color="#4a90e2" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
                        <feDistantLight azimuth="3" elevation="95"></feDistantLight>
                </feSpecularLighting>
            
            </filter></defs><rect width="100%" height="100%" fill="#010e1eff"></rect><rect width="100%" height="100%" fill="#4a90e2" filter="url(#nnnoise-filter)"></rect></svg>

            <svg className='shapes' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nnneon-grad"><stop stop-color="hsl(185, 53%, 55%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(0, 73%, 55%)" stop-opacity="1" offset="100%"></stop></linearGradient><filter id="nnneon-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feGaussianBlur stdDeviation="17 8" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter><filter id="nnneon-filter2" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feGaussianBlur stdDeviation="13 17" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g stroke-width="23" stroke="url(#nnneon-grad)" fill="none"><path d="M400 236.610107421875L541.5000090417586 318.3050566007448V481.6949549584844L400 563.3899041373543L258.4999909582413 481.6949549584844V318.3050566007448L400 236.610107421875Z " filter="url(#nnneon-filter)"></path><path d="M412 236.610107421875L553.5000090417586 318.3050566007448V481.6949549584844L412 563.3899041373543L270.4999909582413 481.6949549584844V318.3050566007448L412 236.610107421875Z " filter="url(#nnneon-filter2)" opacity="0.25"></path><path d="M388 236.610107421875L529.5000090417586 318.3050566007448V481.6949549584844L388 563.3899041373543L246.4999909582413 481.6949549584844V318.3050566007448L388 236.610107421875Z " filter="url(#nnneon-filter2)" opacity="0.25"></path><path d="M400 236.610107421875L541.5000090417586 318.3050566007448V481.6949549584844L400 563.3899041373543L258.4999909582413 481.6949549584844V318.3050566007448L400 236.610107421875Z "></path></g></svg>
        
            <div class="circle"></div>

            <div className="logo">&lt;/&gt;</div>
            <div className='left-pane'>
                <div>
                    <p className='name'>Hello World, my name is Almuzreen Alih.</p>
                </div>
                <div className='profession'>
                    <p>Software Developer</p>
                </div>
                <div className="explain">
                    <ul>
                        <li>Professional Software Developer</li>
                        <li>Full Stack Web Development Enthusiast</li>
                    </ul>
                </div>
            </div>

            <div className='right-pane'>
                <img className='profile-pic' src="https://avatars.githubusercontent.com/u/111932402?s=400&u=fb9d24110b589aa354c4ab609c51936181bb5dd2&v=4" alt="" />
            </div>
        </div>
    )
}

export default HomePage;