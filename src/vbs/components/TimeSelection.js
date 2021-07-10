import React, { useState } from 'react'
import './Calendar.css'
import TimeList from './TimeList'

const TimeSelection = (props) => {

    //props should be the date clicked on the calendar here
    //timeDATA is temporary in rendering out buttons and timeslots at the left side
    const [timeDATA, setTimeDATA] = useState(
        [
            {
                id: 9,
                slot: [true,true],
            }, 
            {
                id: 10,
                slot: [true,true],
            }, 
            {
                id: 11,
                slot: [true,true],
            },  
            {
                id: 12,
                slot: [true,true],
            }, 
            {
                id: 13,
                slot: [true,true],
            }, 
            {
                id:14,
                slot: [true,true],
            }, 
            {
                id: 15,
                slot: [true,true],
            }, 
            {
                id: 16,
                slot: [true,true],
            }, 
            {
                id: 17,
                slot: [true,true],
            }, 
            {
                id: 18,
                slot: [true,true],
            }, 
            {
                id: 19,
                slot: [true,true],
            }, 
            {
                id: 20,
                slot: [true,true],
            }, 
            {
                id: 21,
                slot: [true,true],
            }, 
            {
                id: 22,
                slot: [true,true],
            }, 
            {
                id: 23,
                slot: [true,true],
            }, 
        ]
    );

    return (
        <div className="table">
            <h2>Time Slots Available:</h2>
            <TimeList 
                timeDATA={timeDATA} 
                setTimeDATA={setTimeDATA}
                setTrainingTimes={props.setTrainingTimes}/>
        </div>
    );
}

export default TimeSelection;