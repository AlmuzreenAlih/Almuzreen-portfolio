import { useState } from 'react'
import './PastProjects.scss'

function PastProjects() {
    return (
        <div id='Past' className='past-projects-parent'>
            <p className='past-projects-title'>Past Projects</p>
            <p className='past-projects-title2'>... what else? Here are some of the many:</p>

            <div className="past-projects-body">
                <div className='past-projects-cells'>
                    <p className='project-title'>Balut Incubator and Sorter</p>
                    <p className="project-description">Embedded System Project</p>
                    <p className='project-details'>A system that incubates duck eggs, determines whether the duck eggs are <i>Balut</i> or <i>Penoy</i>, which will also be sorted into separate bins.</p>
                </div>
                <div className='past-projects-cells'>
                    <p className='project-title'>Hydroponics System</p>
                    <p className="project-description">Embedded System Project</p>
                    <p className='project-details'>A system that maintains and nourish the plants on a hyroponics. It maintains the pH level, electrical conductivity and ambient temperature.</p>
                </div>
                <div className='past-projects-cells'>
                    <p className='project-title'>Antibiotic Susceptibility Identifier</p>
                    <p className="project-description">Embedded System Project</p>
                    <p className='project-details'>A system thats measures the Zone of Inhibition of the antibiotics on a petri dish which underwent an antibiotic susceptibility test.</p>
                </div>
                <div className='past-projects-cells'>
                    <p className='project-title'>Vaccination Scheduler</p>
                    <p className="project-description">Full Stack Development Project</p>
                    <p className='project-details'>An Android app with a Web Dashboard. The app is used to schedule babies for vaccination and will send an sms to the guardian before the schedule.</p>
                </div>
                <div className='past-projects-cells'>
                    <p className='project-title'>Doctor - Patient App</p>
                    <p className="project-description">Full Stack Development Project</p>
                    <p className='project-details'>An Android app with a Web Dashboard. The app is used to schedule medicines and alert patients of their intake time of their medicines.</p>
                </div>
                <div className='past-projects-cells'>
                    <p className='project-title'>Hydroponics Android Dashboard</p>
                    <p className="project-description">Full Stack Development Project</p>
                    <p className='project-details'>An Android Dashboard that displays the sensor readings of a hydroponics system with internet connectivity.</p>
                </div>
            </div>
        </div>
    )
}

export default PastProjects;