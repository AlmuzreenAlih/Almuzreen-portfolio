import { useState, useRef } from 'react'
import './ScreenshotsButton.scss'
function ScreenshotsButton(props) {
    const img = useRef(null)
    function onMouseEnter() {
        if (props.brightness) {
            alert("enter")
            img.current.style = {filter: "brightness("+(props.brightness-0.3)+")"}
        }
    }

    function onMouseLeave() {
        if (props.brightness) {
            alert("leave")
            img.current.style = {filter: "brightness("+(props.brightness)+")"}
        }
    }
    return (
        <div className='screenshots-button-parent'
             onMouseEnter={onMouseEnter}
             onMouseOut={onMouseLeave}>
            <div className='ss-img-parent' onClick={props.onClick}>
                <img className={ props.darker ? 'darker' : ''}src={props.images[0]} alt=""/>
                <span className="open material-symbols-outlined">
                    open_in_new
                </span>
            </div>
        </div>
    )
}

export default ScreenshotsButton;