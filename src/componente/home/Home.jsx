import React from 'react';
import profileImg from '../../assets/pocetna.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';


import {FaLinkedinIn, FaGoogleDrive, FaInstagram} from 'react-icons/fa';
import CV from '../../assets/Miloš-Petković-CV.pdf'
import './home.css';

function Home() {
  return (
    <section className='home' id='home'>
       <div className="home__wrapper">
       <div className="home__container container">
            <p className="home__subtitle text-cs">
                Hello, <span>My Name Is</span>
            </p>
            <h1 className="home__title text-cs"><span>Miloš</span> Petković</h1>
            <p className="home__job">
                <span className="text-cs">I Am a </span><b>Sound Designer</b>

                <div className="home__img-wrapper">
                    <div className="home__banner">
                  <img src={profileImg} alt="" className='home__profile'/>  
                    </div>
                    <p className="home__data home__data-one">
                        <span className="text-lg">
                        5<b>+</b>
                        </span>

                        <span className="text-sm text-cs">
                        Years in The <span> Audio Industry</span>
                        </span>
                     </p>
                        <p className="home__data home__data-two">
                            <span className="text-lg">3</span>

                        <span className="text-sm text-cs">
                         Completed <span>Projects</span>
                        </span>
                        </p>
                   <img src={shapeOne} alt='' className='shape shape__1'/>
                   <img src={shapeTwo} alt='' className='shape shape__2'/>
                   <img src={shapeTwo} alt='' className='shape shape__3'/>
                </div>
                <p className="home__text">Driven and passionate audio engineering student with strong connection to video games.
                 With specialization in sound design for creative media, mainly video games in the past 2 years,
                  I bring a unique blend of technical expertise and artistic vision to create immersive gameplay experiences.</p>
            </p>
            <div className="home__socials">
                <a href="https://www.instagram.com/milosgameaudio/" className="home__social-links">
                    <FaInstagram/>
                </a>

                <a href="https://www.linkedin.com/in/milosaudio1/" className="home__social-links">
                    <FaLinkedinIn/>
                </a>

                <a href="https://drive.google.com/file/d/1F8FKC0do9xxnd8Szy1RIgX_YqJ2qr2KV/view" className="home__social-links ">
                    <FaGoogleDrive/>
                </a>
            </div>
            <div className="home__btns">
                <a download='' href={CV} className="btn text-cs">Download CV</a>

                <a href="" className="hero__link text-cs"> My Skills </a>

            </div>
        </div>
       </div>

    
    </section>
  );
};

export default Home
