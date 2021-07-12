import React, { useState } from 'react'
import './Calendar.css'

const TimeList = (props) => {

    const [timingsID, setTimingsID] = useState([]); //for actual use
    const [timingsDisplay, setTimingsDisplay] = useState([]); //for readability purposes
    const timeDATA = props.timeDATA; 

    //For printing the list of buttons & timing indexes
    const listItems = timeDATA.map((timeSlot) => 
        <ul key={timeSlot.id}>
            {timeSlot.id}: 
                <button className="timeButtons" onClick={() => {handleClick(timeSlot, 0)}}>{timeSlot.slot[0]}</button>
                <button className="timeButtons" onClick={() => {handleClick(timeSlot, 1)}}>{timeSlot.slot[1]}</button>
        </ul>,
    );

    //For printing the selected timings
    const listTime = timingsDisplay.map((time, index) => 
        <ul key={index}>
            {time}
        </ul>,
    );

    //Actions after clicking the buttons
    function handleClick(timeSlot, timeMinuteID) {
        //toggler(timeSlot.slot[timeMinuteID]); maybe can toggle buttons      
        let _timingsID = timingsID;
        _timingsID.push({ id: timeSlot.id, slot: timeMinuteID});
        setTimingsID(_timingsID);
        let _timingsDisplay = []
        for (var i = 0; i < timingsID.length; i++) {
            _timingsDisplay.push(timingsID[i].id*100 + timingsID[i].slot*30);
        }

        console.log(_timingsDisplay, 'Array of timing selected');
        
        //View selected times
        setTimingsDisplay(_timingsDisplay);
        
        //Pump it back to grandparent
        props.setTrainingTimes(_timingsDisplay);
    }

    
    function clearTimings() {
        setTimingsID([]);
        setTimingsDisplay([]);
        props.setTrainingTimes([]);
    }

    function toggler(id) {
        return !id;
    }

    return(
        <div>
            <ul>{listItems}</ul>
            <p>Selected Timings:</p>
            <p>{ listTime }</p>
            <button onClick={() => {clearTimings()}}>Clear Timings</button>
        </div>
    )
}

export default TimeList;