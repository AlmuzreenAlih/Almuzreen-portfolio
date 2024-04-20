import { useState } from 'react'
import './Showcase.scss'
import Card from '../../components/Card/Card'

export function Showcase() {
    return (
        <div className='showcase-parent'>
            <p className='showcase-title'>Noteworthy Showcase</p>
            <div className='showcase-body'>
                <div className='school-card'>
                    <img className='school-pic' src="playoffs.png?x=11" alt="" />
                    <div className='school-details'>
                        <p className='title'>StackLeague Playoffs Qualifier</p>
                        <p className='school'>by StackLeague</p>
                        <p className='years'>(December 8, 2022)</p>
                    </div>
                </div> 
            </div>         
        </div>
    )
}

export function ShowcaseR() {
    return (
        <div className='showcase-parent'>
            <img className='profile-pic' src="https://avatars.githubusercontent.com/u/111932402?s=400&u=fb9d24110b589aa354c4ab609c51936181bb5dd2&v=4" alt="" />
        </div>
    )
}

export default Showcase;