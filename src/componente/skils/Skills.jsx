import React from 'react'
import { skills } from '../../Data';
import './skills.css'

function Skills() {
  return (
    <section className="services-section" id='skills'>
    <h2 className="section__title">Professional Skills</h2>
    <p className="section__subtitle">
        My <span>Talent</span></p>
        <div className="skills__container container grid">
        {skills.map(({name,percentage,description},inex)=>{
            return(
                <div className="skills__item" key={inex}>
                    <div className="skills__titles">
                        <h3 className="skills__name">{name}</h3>
                        <span className="skills__number">
                            {percentage}<span>%</span>
                        </span>
                    </div>

                    <p className="skills__discriptio">{description}</p>

                    <div className="skills__bar">
                        <span className="skills_percenage" style={{width:`${percentage}%`}}>
                            <span></span>
                        </span>
                    </div>
                </div>
            );
        })}
        </div>
        
        </section>
  )
}

export default Skills
