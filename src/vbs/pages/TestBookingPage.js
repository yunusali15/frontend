import "./TestBookingPage.css";
import React, { useState } from "react";
import { useRef } from "react";
import { useLocation, useParams } from "react-router";
import StatusBar from "../shared/StatusBar";
import { Link } from "react-router-dom";
import ccaDATA from './ccaDATA';

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
  const [cca, setCCA] = useState("");
  const [purpose, setPurpose] = useState("");
  const [isActive, setIsActive] = useState("");
  
  
  function handleTimeSelect(id) {
    DATA[id].selected = !DATA[id].selected;
    setTimeIntervals(DATA);
    console.log(id);
    console.log(DATA[id].selected);
  }

  return (
    <div className="mainDiv">
      <div className="Statusbar">
        <StatusBar stage="3" />
      </div>
      <form className="contents">
        <div className="row">
          <h2 className="Titles">VENUE :</h2>
          <h3 className="black">{venueName}</h3>
        </div>

        <div className="row">
          <h2 className="Titles">TIME :</h2>
          <h3 className="black">{selectedDate.toDateString()}</h3>
        </div>

        <div className="row">
          <h2 className="Titles">EMAIL :</h2>
          <input
            type="text"
            id="Email"
            name="Email"
            placeholder="e0123456@u.nus.edu.sg"
            required
          ></input>
        </div>

        <div className="row">
          <h2 className="Titles">PURPOSE :</h2>
          <div className='ccaContainer'>
          <div className="radio-buttons">
            <input
            type="radio"
            id="CCA"
            name="Purpose"
            value="CCA"
            value={cca}
            onChange={((event) => setPurpose(event.target.value))}
            onClick={() => setIsActive("active")}
          ></input>
          <label for="CCA">CCA</label>
          <input
            type="radio"
            id="Personal"
            name="Purpose"
            value="Personal"
            value={purpose}
            onChange={((event) => setPurpose(event.target.value))}
            onClick={() => setIsActive("inactive")
            }
          ></input>
          <label for="Personal">Personal</label>
          </div>
            <select
              type="text"
              id="HallCCA"
              name="HallCCA"
              placeholder="Hall CCA"
              value={cca}
              className={isActive? isActive : 'inactive'}
              onChange={(e) => setCCA(e.target.value)}
              required
            >
              {ccaDATA.map((cca) => (
                  <option value={cca}>{cca}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <h2 className="Titles">DETAILS :</h2>
          <input type="text" id="Details" name="Details" placeholder="Details"></input>
        </div>
      </form>
      
      <div className="bottomNavigation">
        <Link className="backButton" to={`/vbs/${venueName}`}>
          Back
        </Link>
        {true ? (
          <p></p>
        ) : (
          <p
            style={{
              fontFamily: '"Roboto Condensed", sans-serif',
              margin: "1% 0",
            }}
          >
            Fill all fields to Submit
          </p>
        )}
        {true ? (
          <Link to= {{pathname:`/vbs/confirmation`}} className="submitButton enabled">
          Submit
          </Link>
        ) : (
          <div className="submitButton disabled">Submit</div>
        )}
      </div>
    </div>
  );
};

export default TestBookingPage;
