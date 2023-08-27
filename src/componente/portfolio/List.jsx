import React, { useState } from 'react'

const List = ({list, filterItems}) => {
    const[active, setActive] = useState(0);
  return (
    <div className='portfolio_list' >
    {list.map((category,inex) => {
        return(
            <button 
            className={`${
                active == inex ? 'active-work': ''} portfolio__list-itams text-cs`} 
        key={inex} 
        onClick={() =>{
            setActive(inex);
            filterItems(category);
        }}
        >
            {category}
            </button>
        );
    })}
      
    </div>
  )
}

export default List
