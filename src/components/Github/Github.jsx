import { useState } from 'react'
import './Github.scss'
function Github(props) {
    return (
        <div className={props.className + " github-parent"} style={{...props.style}} onClick={props.onClick}>
            <i class="devicon-github-original"></i>
        </div>
    )
}

export default Github;  