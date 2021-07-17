import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router';
import VenueSelection from '../../pages/VenueSelection';
import SpecificVenue from '../../pages/SpecificVenue';
import './ProgressBar2.css';

function ProgressBar2 () {
    
    let history = useHistory();

    return ( 
        <div class='container'>
                <div class='dot1' contenteditable="false" onClick={() => history.goBack()}>
                    <div><span class='line1'></span></div>
                    <p class="caption-venue">
                    VENUE
                    </p>
                </div>
            <div class='dot2' contenteditable="false" onClick={() => window.location.reload(false)}>
                <div><span class='line2'></span></div>
                <p class="caption-date">
                    DATE
                </p>
            </div>
            <div class='dot3' contenteditable="false" onClick={() => window.location.reload(false)}>
                <div><span class='line3'></span></div>
                <p class="caption-details">
                DETAILS
                </p>
            </div>
            <div class='dot4' contenteditable="false" onClick={() => window.location.reload(false)}>
                <div><span class='line4'></span></div>
                <p class="caption-submit">
                    SUBMIT
                </p>
            </div>
        </div>
    )
}

export default ProgressBar2;