import React from 'react';

import { tripDetails } from '../constants/TripDetailConstants';

const Carousel = ({ selected }) => {

    return(
        <div className="carousel-container">
            <div className="carousel-elements">
                {Object.keys(tripDetails).map((page, index) => {
                    return <svg key={index} viewBox="0 0 3 3" className="carousel-item">
                        <circle cx="1.5" cy="1.5" r="1" stroke="black" strokeWidth=".1px" fill={page === selected ? "rgb(119, 119, 119)" : "rgb(247, 243, 239)"  }/>
                    </svg>
                })}  
           </div> 
        </div>
    )
}

export default Carousel;