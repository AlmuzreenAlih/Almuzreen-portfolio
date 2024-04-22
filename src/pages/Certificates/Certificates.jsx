import { useState } from 'react'
import './Certificates.scss'
import Card from '../../components/Card/Card'

export function Certificates() {
    return (
        <div className='certificates-parent'>
            <p className='certificates-title'>Noteworthy Certificates</p>
            <div className='certificates-body'>
                {/* <div className='school-card'>
                    <img className='school-pic' src="udemy.svg" alt="" />
                    <div className='school-details'>
                        <p className='title'>Full Stack Web Development Bootcamp</p>
                        <p className='school'>by Udemy</p>
                        <p className='years'>(September 3, 2022)</p>
                    </div>
                </div> */}

                <div className='school-card'>
                    <img className='school-pic' src="playoffs.png?x=11" alt="" />
                    <div className='school-details'>
                        <p className='title'>StackLeague Playoffs Qualifier</p>
                        <p className='school'>by StackLeague</p>
                        <p className='years'>(December 8, 2022)</p>
                    </div>
                </div>

                <div className='school-card'>
                    <img className='school-pic' src="gold.png" alt="" />
                    <div className='school-details'>
                        <p className='title'>Gold Level Challenge Certificate</p>
                        <p className='school'>by StackLeague</p>
                        <p className='years'>(September 3, 2022)</p>
                    </div>
                </div>

                <div className='school-card'>
                    <img className='school-pic' src="silver.png" alt="" />
                    <div className='school-details'>
                        <p className='title'>Silver Level Challenge Certificate</p>
                        <p className='school'>by StackLeague</p>
                        <p className='years'>(July 19, 2022)</p>
                    </div>
                </div>

                <div className='school-card'>
                    <img className='school-pic' src="prc.svg" alt="" />
                    <div className='school-details'>
                        <p className='title'>Licensed Electronics Engineer</p>
                        <p className='school'>by Professional Regulations Commission Phils.</p>
                        <p className='years'>(October 2018)</p>
                    </div>
                    {/* <div className="view">
                        <button>View</button>
                    </div> */}
                </div>   
            </div>         
        </div>
    )
}

export function CertificatesR() {
    return (
        <div className='certificates-parent'>
            <img className='profile-pic' src="certificates.svg" alt="" />
        </div>
    )
}

export default Certificates;