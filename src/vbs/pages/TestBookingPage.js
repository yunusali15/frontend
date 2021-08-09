import "./TestBookingPage.css";
import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import StatusBar from "../shared/StatusBar";
import { Link } from "react-router-dom";
import ccaDATA from "./ccaDATA";
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
  const { selectedDate, selectedTimeslot, venue, selectedSubvenue } =
    useLocation().state;
  const { venueName } = useParams();
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [isActive, setIsActive] = useState("");
  const [emailError, setEmailError] = useState("");
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/vbs/confirmation");
  };

  const emailValidator = (e) => {
    let email = e.target.value;
    if (validator.isEmail(email)) {
      setEmail(email);
      setEmailError("Valid");
    } else {
      setEmail("");
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <div className="mainDiv">
      <div className="Statusbar">
        <StatusBar stage="3" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="contents">
          <div className="row">
            <h2 className="Titles">VENUE :</h2>
            <h3 className="black">{venue.name}</h3>
          </div>

          <div className="row">
            <h2 className="Titles">TIME :</h2>
            <h3 className="black">{selectedDate.toDateString()}</h3>
          </div>

          <div className="row">
            <h2 className="Titles">EMAIL :</h2>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="e0123456@u.nus.edu.sg"
              onChange={(e) => emailValidator(e)}
              required
            ></input>
            <br />
            <span style={{ fontSize: "10px", color: "red" }}>
              &nbsp;{emailError}
            </span>
          </div>

          <div className="row">
            <h2 className="Titles">PURPOSE :</h2>
            <div className="ccaContainer">
              <div className="radio-buttons">
                <input
                  type="radio"
                  id="CCA"
                  name="Purpose"
                  value=""
                  onChange={(event) => setPurpose(event.target.value)}
                  onClick={() => setIsActive("active")}
                ></input>
                <label for="CCA">CCA</label>
                <input
                  type="radio"
                  id="Personal"
                  name="Purpose"
                  value="Personal"
                  onChange={(event) => setPurpose(event.target.value)}
                  onClick={() => setIsActive("inactive")}
                  required
                ></input>
                <label for="Personal">Personal</label>
              </div>
              <select
                id="HallCCA"
                name="HallCCA"
                className={isActive ? isActive : "inactive"}
                onChange={(e) => setPurpose(e.target.value)}
              >
                <option value="">Select a CCA</option>
                {ccaDATA.map((cca) => (
                  <option value={cca}>{cca}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <h2 className="Titles" />
            <input type="text" id="Details" name="HallCCA" required />
          </div>
          <div className="row" style={{ height: "11vh" }}>
            <h2 className="Titles" />
            <textarea
              type="text"
              id="Details"
              name="HallCCA"
              required
              rows="4"
              cols="30"
              style={{ height: "8vh" }}
            />
          </div>
        </div>
        <div className="bottomNavigation">
          <Link
            class="backButton"
            to={{ path: `/vbs/${venueName}`, state: { venue } }}
          >
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
            <button
              type="submit"
              className="submitButton enabled"
              style={{ border: 0 }}
            >
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
