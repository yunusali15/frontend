import React from "react";
import { ReactRouter as Router, Link, useHistory } from "react-router-dom";
import "./VenueSelection.css";
import DATA from "./venueDATA";
import StatusBar from "../../shared/StatusBar";

const VenueSelection = () => {
  return (
    <div className="Venues-page">
      <StatusBar stage="1" />
      <div className="venues-container">
        {DATA.map((venue) => (
          <Link
            className="venueLink"
            to={{ pathname: `./vbs/${venue.venueName}`, state: venue }}
          >
            <div
              className="venue"
              style={{ backgroundImage: `url(${venue.venueImage})` }}
            >
              <div className="venueName">{venue.venueName}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VenueSelection;
