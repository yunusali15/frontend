import "./BookingPage.css";
import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import StatusBar from "../../shared/StatusBar";
import { Link } from "react-router-dom";
import ccaDATA from "./ccaDATA";
import validator from "validator";

const BookingPage = () => {
  const { selectedDate, selectedTimeslot, venue, selectedSubvenue } =
    useLocation().state;
  const venueId = useParams().venueId;
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [emailError, setEmailError] = useState("");
  let history = useHistory();

  console.log(selectedSubvenue);

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
    <div className="BookingPageMainDiv">
      <div className="Statusbar">
        <StatusBar stage="3" venue={venue} />
      </div>
      <form className="BookingPageForm" onSubmit={handleSubmit}>
        <div className="contents">
          <div className="row">
            <h2 className="Titles">VENUE :</h2>
            <h3 className="black">{selectedSubvenue.label}</h3>
          </div>

          <div className="row">
            <h2 className="Titles">TIME :</h2>
            <h3 className="black">{`${selectedDate.toDateString()}: ${selectedTimeslot.map(
              (timeslot) => timeslot.timeStart + " - " + timeslot.timeEnd
            )}`}</h3>
          </div>

          <div className="row">
            <h2 className="Titles">EMAIL :</h2>
            <div className="black">
              <input
                type="email"
                id="Email"
                name="Email"
                placeholder="e0123456@u.nus.edu.sg"
                onChange={(e) => emailValidator(e)}
                required
              ></input>
              <span style={{ fontSize: "10px", color: "red" }}>
                &nbsp;{emailError}
              </span>
            </div>
          </div>

          <div className="row">
            <h2 className="Titles" style={{ alignSelf: "flex-start" }}>
              PURPOSE :
            </h2>
            <div className="ccaContainer">
              <div className="radio-buttons">
                <input
                  type="radio"
                  id="CCA"
                  name="Purpose"
                  value=""
                  onChange={(event) => setPurpose(event.target.value)}
                  onClick={() => setIsActive(true)}
                ></input>
                <label for="CCA">CCA</label>
                <input
                  type="radio"
                  id="Personal"
                  name="Purpose"
                  value="Personal"
                  onChange={(event) => setPurpose(event.target.value)}
                  onClick={() => setIsActive(false)}
                  required
                ></input>
                <label for="Personal">Personal</label>
              </div>
              {isActive && (
                <select
                  id="HallCCA"
                  name="HallCCA"
                  className="bookingPageActive"
                  onChange={(e) => setPurpose(e.target.value)}
                >
                  <option value="">Select a CCA</option>
                  {ccaDATA.map((cca) => (
                    <option value={cca}>{cca}</option>
                  ))}
                </select>
              )}
              <textarea
                type="text"
                id="Details"
                name="HallCCA"
                required
                rows="4"
                cols="30"
                style={{ height: "8vh" }}
                placeholder="Details"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="bottomNavigation">
        <Link
          class="backButton"
          to={{ pathname: `/vbs/${venueId}`, state: { venue } }}
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
          <Link
            className="submitButton enabled"
            style={{ border: 0 }}
            onClick={handleSubmit}
          >
            Submit
          </Link>
        ) : (
          <div className="submitButton disabled">Submit</div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
