import React from "react";
import { useHistory, useParams } from "react-router";
import "./ProgressBar.css";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProgressBar({ stage, venue }) {
  let history = useHistory();
  const venueId = useParams().venueId;
  return (
    <div className="progressBarContainer">
      <div className="dotsAndLines">
        <div className="lines">
          <div className={`line ${stage > 1 ? "updated" : ""}`} />
          <div className={`line ${stage > 2 ? "updated" : ""}`} />
          <div className={`line ${stage > 3 ? "updated" : ""}`} />
        </div>
        <div className="dots">
          <BsCircleFill className="dot updated" />
          <BsCircleFill className={`dot ${stage > 1 ? "updated" : ""}`} />
          <BsCircleFill className={`dot ${stage > 2 ? "updated" : ""}`} />
          <BsCircleFill className={`dot ${stage > 3 ? "updated" : ""}`} />
        </div>
      </div>
      <div className="links">
        {stage > 1 && stage < 4 ? (
          <Link className="link enabled" to="/vbs">
            VENUE
          </Link>
        ) : (
          <Link className="link">VENUE</Link>
        )}
        {stage > 2 && stage < 4 ? (
          <Link
            className="link enabled"
            to={{ pathname: `/vbs/${venueId}`, state: { venue } }}
          >
            DATE
          </Link>
        ) : (
          <Link className="link" onClick={(e) => {e.preventDefault()}}>DATE</Link>
        )}
        <Link className="link" onClick={(e) => {e.preventDefault()}}>DETAILS</Link>
        <Link className="link" onClick={(e) => {e.preventDefault()}}> SUBMIT</Link>
      </div>
    </div>
  );
}

export default ProgressBar;
