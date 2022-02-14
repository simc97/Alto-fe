import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { tripDetails } from '../constants/TripDetailConstants';

import Vehicle from '../assets/images/Vehicle_photo.png';
import Driver from  '../assets/images/Driver_photo.png';
import MapOverview from '../assets/images/Map_overview.png';
import Info from '../assets/images/Info_icon.png';
import Edit from '../assets/images/Edit_icon.png';
import Carousel from './Carousel.jsx';

const views = Object.keys(tripDetails);

const imageRegistry = {
    'vehicle': Vehicle,
    'driver': Driver,
    'map': MapOverview
}

const Trip = ({
    data
}) => {
   
    const [ viewIndex, setView ] = useState(0);

    const dataObj = data[views[viewIndex]];

    useEffect(() => {
        window.addEventListener("click", () => 
            setView((viewIndex + 1) % views.length
        ));
    });
    
    return(
        <div className="trip-detail-container">
            <Carousel selected={views[viewIndex]}/> 
            {
                tripDetails[views[viewIndex]].map((obj, index) => {
                    switch(obj.type) {
                        case 'header':
                            return <h2 className="trip-details-header" key={index}>{obj.label}</h2>
                        case 'important':
                            return <div className="trip-important-container" key={index}>
                                <div>{obj.label}</div>
                                <h1>{obj.date ? moment(dataObj[obj.index]).format('h:mm A') : dataObj[obj.index]}</h1>
                            </div>
                        case 'subtitle':
                            return <div className="trip-subtitle" key={index}>{obj.label}{dataObj[obj.index]} </div>
                        case 'grid':
                            return <div key={index} className="grid-container"> 
                                {
                                    obj.content.map((element, i) => {
                                        return <div className={['grid-element'].concat(element.size).join(' ')} key={i}>
                                            <hr className="horizontal-line"/>
                                            <div className="grid-element-header">{element.label}</div>
                                            <div>{element.index_type && element.index_type === 'range' 
                                                ? dataObj[element.index1] + ' - ' + dataObj[element.index2] 
                                                : dataObj[element.index]}
                                            </div>
                                        </div>
                                    })
                                }   
                            </div>
                        case 'details':
                            return <div>
                                    <hr className="horizontal-line"/>
                                    <div className="details-section">{dataObj[obj.index]} </div>
                                </div>
                        case 'button':
                            return <div className="button-container">
                                <button className="filled-button" key={index} disabled>{obj.label}</button>
                            </div>
                        case 'image':
                            return <img src={imageRegistry[obj.img]} width={obj.width} height={obj.height} alt={obj.img}/>
                        default:
                            return;
                    }
                })
            }
        </div>
    )
}


export default Trip;