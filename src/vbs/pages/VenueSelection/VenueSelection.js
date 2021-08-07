import React, { useEffect, useState } from "react";
import { ReactRouter as Router, Link, useHistory } from "react-router-dom";
import "./VenueSelection.css";
import DATA from "./venueDATA";
import StatusBar from "../../shared/StatusBar";
import axios from "axios";

const BASEURL = "https://britannic.herokuapp.com/";

const api = axios.create({ baseURL: BASEURL });

const VenueSelection = () => {
  const [parentVenueArray, setParentVenueArray] = useState([]);

  //fetch list of parent venues upon opening
  useEffect(() => {
    api
      .get("/api/v1/venue/search?isChildVenue=false")
      .then((res) => setParentVenueArray(res.data.venues));
    return;
  }, []);

  return (
    <div className="Venues-page">
      <StatusBar stage={1} />
      <div className="venues-container">
        {parentVenueArray.map((venue) => (
          <Link
            className="venueLink"
            to={{ pathname: `./vbs/${venue.id}`, state: { venue } }}
          >
            <div
              className="venue"
              style={{ backgroundImage: `url(${BASEURL + venue.image})` }}
            >
              <div className="venueName">{venue.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VenueSelection;
