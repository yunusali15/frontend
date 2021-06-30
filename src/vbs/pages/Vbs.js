import React from "react";
import { ReactRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Vbs.css";

const DATA = [
  {
    venueName: "Multi-Purpose Hall",
    venueID: "MPH",
    venueImage:
      "https://nus.edu.sg/osa/images/default-source/kevii-hall/facilities/communal-hall.png?sfvrsn=cfd2a53_2",
  },
  {
    venueName: "Multi-Purpose Court",
    venueID: "MPC",
    venueImage:
      "https://nus.edu.sg/osa/images/default-source/kevii-hall/facilities/11_multi-purpose-court.png?sfvrsn=55ded9f6_2",
  },
  {
    venueName: "Squash Court",
    venueID: "squash",
    venueImage:
      "https://nus.edu.sg/osa/images/default-source/kevii-hall/facilities/squash-court.png?sfvrsn=951c1afb_2",
  },
  {
    venueName: "Heritage Room",
    venueID: "heritage",
    venueImage:
      "https://nus.edu.sg/osa/images/default-source/kevii-hall/facilities/heritage-room.png?sfvrsn=1659b3c4_2",
  },
];

const Vbs = (props) => {
  return (
    <div class="venuesContainer">
      {DATA.map((venue) => (
        <Link
          to={{ pathname: `./vbs/${venue.venueName}`, state: venue }}
          class="specificVenue"
        >
          <img
            src={venue.venueImage}
            alt="Venue Image Here"
            class="venueImage"
          />
          <p class="venueName">{venue.venueName}</p>
        </Link>
      ))}
    </div>
  );
};

export default Vbs;
