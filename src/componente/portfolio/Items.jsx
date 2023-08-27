import React from 'react';

import {motion} from 'framer-motion';
import ReactPlayer from 'react-player';


const Items=({soundItems})=> {
  return (
    <>
    {soundItems.map((soundItem) => {
        const{id, video, category, title, description}= soundItem;
        return(
            <motion.div 
            layout 
            animate={{opacity:1, scale:1}}
            initial={{opacity:0.8, scale:0.6}}
            exit={{opacity:0.8, scale:0.6}}
            transition={{duration: 0.4}}
            className="portfolio__items card card-two" key={id}>
                <div className="portfolio__video-wrapper">
                    <ReactPlayer controls= {true} url={video}  height= "240" width="100" className='portfolio__video'/>
                    
                </div>
                <span className="portfolio__category text-cs">{category}</span>
                <h3 className="portfolio__title">{title}</h3>
                <p className="portfolio__description">{description}</p>
                
            </motion.div>
        );
    })}
    </>
  );
};

export default Items;
