import React from 'react'
import { cv } from '../../Data'
import Card from './Card'
import './resume.css'

function Resume() {
  return (

      <section className="resume srction" id='work'>
    <h2 className="section__title">Resume</h2>
    <p className="section__subtitle">
        My <span>Story</span></p> 
        <div className="resume__container container container grid">
            <div className="resume__groud">
                <h3 className="resume__heading">Education</h3>

                <div className="resume__itesm">
                {cv.map((val, id) => {
                    if(val.category === 'education') {
                        return(
                            <Card 
                            key={id} 
                            title={val.title} 
                            subtitle={val.subtitle} 
                            date={val.date} 
                            description={val.description}
                            />
                        );
                    }
                })}
                </div>
                
            </div>

            <div className="resume__groud">
                <h3 className="resume__heading">Experience</h3>

                <div className="resume__itesm">
                {cv.map((val, id) => {
                    if(val.category === 'experience') {
                        return(
                            <Card 
                            key={id} 
                            title={val.title} 
                            subtitle={val.subtitle} 
                            date={val.date} 
                            description={val.description}
                            />
                        );
                    }
                })}
                </div>
                
            </div>
        </div>
        
        </section>
    
  )
}

export default Resume
