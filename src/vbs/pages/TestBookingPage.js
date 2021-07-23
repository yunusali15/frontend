import "./TestBookingPage.css";
import React, {useState} from "react";
import {useRef} from "react";
import { useLocation, useParams } from "react-router";
import ProgressBar from "../components/ProgressBars/ProgressBar";
import { Link } from "react-router-dom";

const DATA = [
    { id: 0, timeStart: "08:00", timeEnd: "09:00", selected: false },
    { id: 1, timeStart: "09:00", timeEnd: "10:00", selected: false },
    { id: 2, timeStart: "10:00", timeEnd: "11:00", selected: false },
    { id: 3, timeStart: "11:00", timeEnd: "12:00", selected: false },
    { id: 4, timeStart: "12:00", timeEnd: "13:00", selected: false },
    { id: 4, timeStart: "13:00", timeEnd: "14:00", selected: false },
  ];

const TestBookingPage = () => {
    const { venueName } = useParams();
    const { selectedDate } = useLocation().state;
    const [timeIntervals, setTimeIntervals] = useState(DATA);
    const [cca, setCCA] = useState('');
    const [purpose, setPurpose] = useState('');
    const[isActive, setIsActive] = useState('');
    const OnClick = () => setIsActive(!isActive);

    function handleTimeSelect(id) {
        DATA[id].selected = !DATA[id].selected;
        setTimeIntervals(DATA);
        console.log(id);
        console.log(DATA[id].selected);
      }
 
    return (
        <div class="mainDiv">
            <div class = "bar" >
                <h1 class = "Venue">Venue Booking System</h1>
                <div className="progressbar">
                    <ProgressBar/>
                </div>
                
            </div>
            <div class = "contents">
                <form action="">
                    <div class = "row">
                        <h2 class = "Titles">VENUE</h2>
                        <h3 class = "black">{venueName}</h3>
                    </div>

                    <div class = "row">
                        <h2 class = "Titles">TIME</h2>
                        <h3 class = "black">{selectedDate.toDateString()}</h3> 
                    </div>
                    
                    <div class = "row">
                        <h2 class = "Titles">EMAIL</h2>
                        <input type = "text" id = "Email" name="Email" placeholder = "e0123456@u.nus.edu.sg" required></input>
                        
                    </div>
                        
                    <div class = "row">
                        <h2 class = "Titles">PURPOSE</h2>
                        <input type ="radio" id="CCA" name="Purpose" value ="CCA" onClick = {OnClick}
                        value={cca} onChange={event => setCCA(event.target.value)}></input>
                        <label for="CCA">CCA</label>
                        <input type ="radio" id="Personal" name="Purpose" value ="Personal" onClick = {OnClick}
                        value={purpose} onChange={event => setPurpose(event.target.value)}></input>
                        <label for="Personal">Personal</label>
                        
                    </div>
                    <div className = {isActive ? "active": "inactive"}>
                        <input type = "text" id = "HallCCA" name = "HallCCA" placeholder = "Hall CCA" required></input>
                    </div>
    
                    
                    <input type = "text" id = "Details" name= "Details" placeholder = "Details"></input>
                </form>
            </div>

            <div className = "Buttons">
            <Link class="backButton" to={{
                pathname:"/vbs/{venueName}",
            }}>
                Back
            </Link>
            <Link class = "submitButton"
                to={{
                pathname: "/vbs/confirmation",
                
                state: {
                venueName: venueName,
                selectedDate: selectedDate,
                cca: cca,
            purpose: purpose
          },
        }}
      >
        Submit
      </Link> 
            </div>
            
            
        </div>

    )
    
};

export default TestBookingPage;