import React, { useState } from 'react';
import List from './List';
import Itams from './Items';
import {sound} from '../../Data';
import './portfolio.css';
import { AnimatePresence } from 'framer-motion';

const allNavList= [
    'all',
    ...new Set(sound.map((sounds) => sounds.category)),
];


console.log(allNavList);

const Portfolio =() => {
    const[soundItems, setMenuItams] = useState(sound)
    const[navList,setCategoris] = useState(allNavList);

    const filterItems = (category) => {
        if(category =='all'){
            setMenuItams(sound);
            return;
        }
        const newSaundItems= sound.filter(
            (item) => item.category === category);
        
        setMenuItams(newSaundItems);
    };

  return (
   <section className="portfolio srction" id='work'>
<h2 className="section__title">Portfolio</h2>
    <p className="section__subtitle">
        My <span>Cases</span></p> 
        <List list={navList} filterItems={filterItems}/>
        <div className="portfolio__container container grid">
            <AnimatePresence initial={false}>
            <Itams soundItems={soundItems} />
            </AnimatePresence>
        </div>
        
   </section>
  
  )
}

export default Portfolio
