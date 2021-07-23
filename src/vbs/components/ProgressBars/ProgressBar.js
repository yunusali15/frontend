import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router';
import VenueSelection from '../../pages/VenueSelection';
import './ProgressBar.css'

function ProgressBar (props) {

    let history = useHistory();
    
    if (props.stage==='1') {
        return ( 
            <div className='containers'>
                    <div className='updatedDot' contentEditable="false">
                        <div><span className='updatedLine'></span></div>
                        <p className="caption-venue">
                        VENUE
                        </p>
                    </div>
                <div className='dot' contentEditable="false">
                    <div><span className='line'></span></div>
                    <p className="caption-date">
                        DATE
                    </p>
                </div>
                <div className='dot' contentEditable="false">
                    <div><span className='line'></span></div>
                    <p className="caption-details">
                    DETAILS
                    </p>
                </div>
                <div className='dot4' contentEditable="false">
                    <div><span className='line4'></span></div>
                    <p className="caption-submit">
                        SUBMIT
                    </p>
                </div>
            </div>
        )
    }

    else if(props.stage==='2') {
        return ( 
            <div className='containers'>
                    <div className='updatedDot' contentEditable="false" onClick={() => history.goBack()}>
                        <div><span className='updatedLine'></span></div>
                        <p className="caption-venue">
                        VENUE
                        </p>
                    </div>
                <div className='updatedDot' contentEditable="false" onClick={() => window.location.reload(false)}>
                    <div><span className='updatedLine'></span></div>
                    <p className="caption-date">
                        DATE
                    </p>
                </div>
                <div className='dot' contentEditable="false">
                    <div><span className='line'></span></div>
                    <p className="caption-details">
                    DETAILS
                    </p>
                </div>
                <div className='dot4' contentEditable="false">
                    <div><span className='line4'></span></div>
                    <p className="caption-submit">
                        SUBMIT
                    </p>
                </div>
            </div>
        )
    }

    else if(props.stage==='3') {
        return ( 
            <div className='containers'>
                    <div className='updatedDot' contentEditable="false" onClick={() => history.goBack(2)}>
                        <div><span className='updatedLine'></span></div>
                        <p className="caption-venue">
                        VENUE
                        </p>
                    </div>
                <div className='updatedDot' contentEditable="false" onClick={() => {history.goBack()}}>
                    <div><span className='updatedLine'></span></div>
                    <p className="caption-date">
                        DATE
                    </p>
                </div>
                <div className='updatedDot' contentEditable="false" onClick={() => window.location.reload(false)}>
                    <div><span className='updatedLine'></span></div>
                    <p className="caption-details">
                    DETAILS
                    </p>
                </div>
                <div className='dot4' contentEditable="false">
                    <div><span className='line4'></span></div>
                    <p className="caption-submit">
                        SUBMIT
                    </p>
                </div>
            </div>
        )
    }

    else {
        return ( 
            <div className='containers'>
                    <div className='updatedDot' contentEditable="false" onClick={() => history.goBack(3)}>
                        <div><span className='updatedLine'></span></div>
                        <p className="caption-venue">
                        VENUE
                        </p>
                    </div>
                <div className='updatedDot' contentEditable="false" onClick={() => history.goBack(2)}>
                    <div><span className='updatedLine'></span></div>
                    <p className="caption-date">
                        DATE
                    </p>
                </div>
                <div className='updatedDot' contentEditable="false" onClick={() => history.goBack(1)}>
                    <div><span className='updatedLine'></span></div>
                    <p className="caption-details">
                    DETAILS
                    </p>
                </div>
                <div className='updatedDot4' contentEditable="false" onClick={() => window.location.reload(false)}>
                    <div><span className='line4'></span></div>
                    <p className="caption-submit">
                        SUBMIT
                    </p>
                </div>
            </div>
        )
    }
}
    
export default ProgressBar;
    