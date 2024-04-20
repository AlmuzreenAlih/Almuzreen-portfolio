import { useState } from 'react'
import './Education.scss'
import Card from '../../components/Card/Card'

export function Education() {
    return (
        <div className='education-parent'>
            <p className='education-title'>Education</p>
            <div className='education-body'>
                <div className='school-card'>
                    <img className='school-pic' src="ue.png" alt="" />
                    <div className='school-details'>
                        <p className='title'>University of the East - Manila</p>
                        <p className='school'>Bachelor of Science in Electronics and Communications Engineering</p>
                        <p className='years'>(2013 - 2018)</p>
                    </div>
                </div>

                <div className='school-card'>
                    <img className='school-pic' src="shs.png" alt="" />
                    <div className='school-details'>
                        <p className='title'>Mindanao State Univeristy - Science High School</p>
                        <p className='school'>Secondary Level Education (High Scool)</p>
                        <p className='years'>(2009 - 2013)</p>
                    </div>
                </div>

                <div className='school-card'>
                    <img className='school-pic' src="les.png" alt="" />
                    <div className='school-details'>
                        <p className='title'>Mindanao State Univeristy - Child Development Center </p>
                        <p className='school'>Primary Level Education (Grade School)</p>
                        <p className='years'>(2004 - 2009)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function EducationR() {
    return (
        <div className='education-parent'>
            <img className='profile-pic' src="https://avatars.githubusercontent.com/u/111932402?s=400&u=fb9d24110b589aa354c4ab609c51936181bb5dd2&v=4" alt="" />
        </div>
    )
}

export default Education;