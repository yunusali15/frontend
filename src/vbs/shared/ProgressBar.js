import React from "react";
import { useHistory, useParams } from "react-router";
import "./ProgressBar.css";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProgressBar({ stage }) {
  let history = useHistory();
  let { venueName } = useParams("venueName");
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
          <Link className="link enabled" to={`/vbs/${venueName}`}>
            DATE
          </Link>
        ) : (
          <Link className="link">DATE</Link>
        )}
        <Link className="link">DETAILS</Link>
        <Link className="link">SUBMIT</Link>
      </div>
    </div>
  );
}

export default ProgressBar;
