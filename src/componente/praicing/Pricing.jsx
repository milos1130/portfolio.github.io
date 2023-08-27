import React from 'react'
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import shapeTwo from '../../assets/shape-2.png';
import "./pricing.css"


const Pricing = () => {
  return (
    <section className="pricing section" id='pricing'>
    <h2 className="section__title text-cs">Pricing</h2>
    <p className="section__subtitle">
        My <span>Price Bord</span></p> 

        <div className="pricing__container container grid">
            <div className="pricing_item card card-one">
                <span className="pricing__subtitle text-cs">Hourley Basis</span>
                <h3 className="pricing__price">
                    39 <span>$</span> <em>Hour</em>
                </h3>
                <p className="pricing__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="pricing__list">
                    <li className="list__items">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Zvuk</span>
                    </li>
                    <li className="list__items">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Zvuk</span>
                    </li>
                    <li className="list__items">
                        <del>Zvuk</del>
                    </li>
                    <li className="list__items">
                        <del>Zvuk</del>
                    </li>
                </ul>
                <a href="" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className='pricing__btn-icon '></FaArrowRight>
                </a>
                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>

            <div className="pricing_item card card-one">
                <span className="pricing__subtitle text-cs">Freelensing</span>
                <h3 className="pricing__price">
                    120 <span>$</span> <em>Week</em>
                </h3>
                <p className="pricing__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="pricing__list">
                    <li className="list__items">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Zvuk</span>
                    </li>
                    <li className="list__items">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Zvuk</span>
                    </li>
                    <li className="list__items">
                    <FaCheck className='list__icon'></FaCheck>
                        <span>Zvuk</span>
                    </li>
                    <li className="list__items">
                        <del>Zvuk</del>
                    </li>
                </ul>
                <a href="" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>
                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>

            <div className="pricing_item card card-one">
                <span className="pricing__subtitle text-cs">Full Time</span>
                <h3 className="pricing__price">
                    1,200 <span>$</span> <em>Month</em>
                </h3>
                <p className="pricing__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="pricing__list">
                    <li className="list__items">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Zvuk</span>
                    </li>
                    <li className="list__items">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Zvuk</span>
                    </li>
                    <li className="list__items">
                    <FaCheck className='list__icon'></FaCheck>
                        <span>Zvuk</span>
                    </li>
                    <li className="list__items">
                    <FaCheck className='list__icon'></FaCheck>
                        <span>Zvuk</span>
                    </li>
                </ul>
                <a href="" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className='pricing__btn-icon '></FaArrowRight>
                </a>
                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>
         </div>
     </section>
  );
};

export default Pricing