import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Services.css'

import TopServices from './Layout/TopServices/TopServices'
import Offer from "./Layout/Offer/Offer"
import PopularDestination from "./Layout/PopularDestination/PopularDestination"
import BestVacation from "./Layout/BestVacation/BestVacation"

const Services = () => {
    return(
        <div className="main">
            <div className='head'>
                <img src='images/Rectangle 140.png' alt='about-bg'></img>
                <div className='head-1'>
                    <h2 className='service_head'>Services</h2>
                </div>
            </div>
        <TopServices/>
        <Offer/>
        <PopularDestination/>
        <BestVacation/>
        </div>
    )
}

export default Services