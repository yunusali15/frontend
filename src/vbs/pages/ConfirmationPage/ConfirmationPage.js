import { useLocation } from "react-router-dom";
import React from "react";

const ConfirmationPage = () => {

    const data = useLocation().state;
    const timeIntervals = data.timeIntervals;

    return ( 
        <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
            <h1>{`Your request has been sent to the IA Director`}</h1>
            <p>{`Venue: ${data.venueName}`}</p>
            <p>{`CCA: ${data.cca}`}</p>
            <p>{`Purpose: ${data.purpose}`}</p>
            <h2>Timeslots:</h2>
            {timeIntervals.filter(i => i.selected).map(i => (
                <p>{`${i.timeStart} to ${i.timeEnd}`}</p>
            ))}
        </div>
     );
}
 
export default ConfirmationPage;