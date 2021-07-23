import React from 'react';
import { ReactRouter as Router, Link, useHistory } from "react-router-dom";
import './VenueSelection.css'
import progress from './progress-bar.svg';
import DATA from './venueDATA';
import ProgressBar from '../components/ProgressBars/ProgressBar';
import '../components/ProgressBars/ProgressBar.css';

const VenueSelection = () => {
    
    return (
        <div className="Venues-page">
            <div className="Header">
                <div className="Title">
                VENUE BOOKING SYSTEM
                </div>
                <div className='progressbar'>
                    <ProgressBar stage="1" />
                </div>
            </div>
            <div className='venues-container'> 
                {DATA.map((venue) => (
                    <div className="venue" 
                    style={{backgroundImage: `url(${venue.venueImage})`}}
                    >
                    <div className='venueName'>
                    {venue.venueName}
                    </div>
                    <Link
                    to={{ pathname: `./vbs/${venue.venueName}`, state: venue }}>
                    </Link>
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default VenueSelection;
