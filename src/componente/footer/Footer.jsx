import React from 'react'
import {FaFacebook,FaLinkedinIn, FaGoogleDrive, FaInstagram} from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
             <div className="footer__socials">
                <a href="https://www.instagram.com/milosgameaudio/" className="footer__social-links">
                    <FaInstagram/>
                </a>
                <a href="https://www.linkedin.com/in/milosaudio1/" className="footer__social-links">
                    <FaLinkedinIn/>
                </a>
                <a href="https://drive.google.com/file/d/1F8FKC0do9xxnd8Szy1RIgX_YqJ2qr2KV/view" className="footer__social-links ">
                    <FaGoogleDrive/>
                </a>
            </div>

                <p className="footer__copyright text-cs"> &copy; 2023 
                <span> Luique </span> All Rights Reservd</p>

                <p className="footer__copyright text-cs"> Developed by 
                <span> Nevena Čelić</span></p>
          
        </div>
    </footer>
  )
}

export default Footer
