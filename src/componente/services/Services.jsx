import React from 'react'

import { services } from '../../Data'
import{FaArrowRight} from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import './services.css'

import shapeTwo from '../../assets/shape-2.png';
const Services = () => {
  return (
    <div>
        
        <section className="services-section" id='services'>
        <h2 className="section__title">What I Offer</h2>
        <p className="section__subtitle"> My <span>Services</span></p>

            <Swiper 
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              540: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className='services__container container mySwiper'>
                {services.map(({ name, title, description }, index) => {
                    return(
                        <SwiperSlide className='services__item card card-one' key={index}>
                            <span className='services__subtitle text-cs'>{name}</span>

                            <h3 className='services__title'>{title}</h3>
                            <p className='services__description'>{description}</p>

                           
                            <img src={shapeTwo} alt="" className='shape c__shape' />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            
    </section>
    </div>
  );
}

export default Services
