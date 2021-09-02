import React, { useEffect, useState } from "react";
import { ReactRouter as Router, Link, useHistory } from "react-router-dom";
import "./VenueSelection.css";
import StatusBar from "../../shared/StatusBar";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const BASEURL = "https://britannic.herokuapp.com/";

const api = axios.create({ baseURL: BASEURL });
api.defaults.headers.common["Authorization"] = "KEVII1!";

const VenueSelection = () => {
  const [parentVenueArray, setParentVenueArray] = useState([]);
  const [loading, setLoading] = useState(false);
  //fetch list of parent venues upon opening
  useEffect(() => {
    setLoading(true);
    api.get("/api/v1/venue/search?isChildVenue=false").then((res) => {
      setParentVenueArray(res.data.venues);
      setLoading(false);
    });
    return;
  }, []);

  return (
    <div className="VenueSelection-page">
      <StatusBar stage={1} />
      {loading ? (
        <>
          <p>Loading</p>
          <BeatLoader color="black" loading={true} />
        </>
      ) : (
        <div className="VenueSelection-venuesContainer">
          {parentVenueArray.map((venue) => (
            <Link
              className="VenueSelection-venueLink"
              to={{ pathname: `./vbs/${venue.id}`, state: { venue } }}
            >
              <div
                className="VenueSelection-venue"
                style={{ backgroundImage: `url(${BASEURL + venue.image})` }}
              >
                <div className="VenueSelection-venueName">{venue.name}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VenueSelection;
