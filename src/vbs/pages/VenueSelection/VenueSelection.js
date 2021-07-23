import React from "react";
import { Link } from "react-router-dom";
import "./VenueSelection.css";
import DATA from "./venueDATA";
import StatusBar from "../../shared/StatusBar";

const VenueSelection = () => {
  return (
    <div className="Venues-page">
      <StatusBar stage="1" />
      <div className="venues-container">
        {DATA.map((venue) => (
          <div className="venue">
            <Link
              to={{ pathname: `./vbs/${venue.venueName}`, state: venue }}
              className="specificVenue"
            >
              <img
                src={venue.venueImage}
                alt="Venue Image Here"
                className="venueImage"
                stylee
              />
              <div className="venueName">{venue.venueName}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueSelection;
