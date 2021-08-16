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
              style={venue.image == null ?  {backgroundImage: `url("https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/40773051_735925123423298_3456762337506099200_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=o3-jIf5mT_MAX9ol4jU&_nc_ht=scontent-xsp1-2.xx&oh=2a48d86e66f9c9d397ae10fe5b2f8fae&oe=6141C801")`}: 
              {backgroundImage: `url(${BASEURL + venue.image})`}}
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
