
import React, { useRef } from 'react'
import { 
    FaRegAddressBook, FaRegEnvelope,FaRegUser,FaRegMap,FaLinkedinIn } from 'react-icons/fa';
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uf649wj', 'template_qaxoo9s', form.current, 'fAY-WVrH5XwDbPHoE')
      
    e.target.reset()
  };

    return (
      <section className="portfolio section" id='contact'>
      <h2 className="section__title text-cs">Contact Me</h2>
      <p className="section__subtitle">
          Let's <span>Talk About Ideas</span></p> 

          <div className="contact__container container grid">
            <div className="contact__content">
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegMap/>
                    </span>
                    <h3 className="contact__card-title">Location</h3>
                    <p className="contact__card-data">Belgrade, Serbia</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegUser/>
                    </span>
                    <h3 className="contact__card-title">Freelance</h3>
                    <p className="contact__card-data">https://www.fiverr.com/milosaudio</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaLinkedinIn/>
                    </span>
                    <h3 className="contact__card-title">Linkedin</h3>
                    <p className="contact__card-data">https://www.linkedin.com/in/milosaudio1/</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegEnvelope/>
                    </span>
                    <h3 className="contact__card-title">Email</h3>
                    <p className="contact__card-data">m.petkovic103@gmail.com</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegAddressBook/>
                    </span>
                    <h3 className="contact__card-title">Phone</h3>
                    <p className="contact__card-data">+381 64 979 9889</p>
                </div>
            </div>


            <form ref={form} onSubmit={sendEmail} className="contact__form" >
                <div className="contact__form-group grid">
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            Your Full Name <b>*</b>
                        </label>
                        <input type="text"  
                        name='name' 
                        className="contact__form-input" />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            Your Email <b>*</b>
                        </label>
                        <input type="email" 
                         name='email' 
                        className="contact__form-input" />
                    </div>

                

                    <div className="contact__form-div contact__font-area">
                        <label className="contact__form-tag text-cs">
                            Your Message <b>*</b>
                        </label>
                        <textarea 
                        name='message'
                        className='contact__form-input'></textarea>
                    </div>

                    <div className="contact__submit">
                        <p>* Accept th terms and conditions.</p>
                        <button  type="submit" value="Send" className="btn text-cs">Send</button>
                    </div>
                </div>
            </form>
          </div>
          
        </section>
  );
};

export default Contact