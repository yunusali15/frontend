import "./TestBookingPage.css";
import React, { useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router";
import StatusBar from "../shared/StatusBar";
import { Link , Redirect} from "react-router-dom";
import ccaDATA from './ccaDATA';
import { tsNonNullExpression } from "@babel/types";
import validator from "validator";
import { required } from "yargs";

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
  const [ email, setEmail] = useState(''); 
  const [purpose, setPurpose] = useState("");
  const [isActive, setIsActive] = useState("");
  const [emailError, setEmailError] = useState('');
  let history = useHistory();
  
  
  function handleTimeSelect(id) {
    DATA[id].selected = !DATA[id].selected;
    setTimeIntervals(DATA);
    console.log(id);
    console.log(DATA[id].selected);
  }

  const handleSubmit = event => {
    event.preventDefault();
    history.push('/vbs/confirmation')
  }

  const emailValidator = e => {

    let email = e.target.value;
    if(validator.isEmail(email)) {
      setEmail(email);
      setEmailError('Valid')
    }
    else {
      setEmail('');
      setEmailError('Enter valid Email');
    }
  }

  return (
    <div className="mainDiv">
      <div className="Statusbar">
        <StatusBar stage="3" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="contents">
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
            onChange= {(e) => emailValidator(e)}
            required
          ></input>
          <span>{emailError}</span>
        </div>

        <div className="row">
          <h2 className="Titles">PURPOSE :</h2>
          <div className='ccaContainer'>
          <div className="radio-buttons">
            <input
            type="radio"
            id="CCA"
            name="Purpose"
            value=""
            onChange={((event) => setPurpose(event.target.value))}
            onClick={() => setIsActive("active")}
          ></input>
          <label for="CCA">CCA</label>
          <input
            type="radio"
            id="Personal"
            name="Purpose"
            value="Personal"
            onChange={((event) => setPurpose(event.target.value))}
            onClick={() => setIsActive("inactive")}
            required
        
          ></input>
          <label for="Personal">Personal</label>
          </div>
            <select
              id="HallCCA"
              name="HallCCA"
              className={isActive? isActive : 'inactive'}
              onChange={(e) => setPurpose(e.target.value)}
            > 
              <option value=''>Select a CCA</option>
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
      </div>
      <div className="bottomNavigation" style={{width: '100%'}}>
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
        {email && purpose ? (
          <button type='submit' className="submitButton enabled"
          style={{border:0,}}>
            Submit
          </button>
        ) : (
          <div className="submitButton disabled">Submit</div>
        )}
      </div>
      </form>
    </div>
  );
};

export default TestBookingPage;
