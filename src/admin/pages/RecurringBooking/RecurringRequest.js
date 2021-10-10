import React, { useState, useEffect } from "react";
import InnerTabs from "../InnerTabs";
import NewRecurring from "./NewRecurring";
import axios from "axios";

const RecurringRequest = () => {
  const [bookingRequest, setbookingRequest] = useState([]);
  const [venueFilter, setVenueFilter] = useState([]);
  const [allVenue, setAllVenue] = useState([]);
  const BASEURL = "https://britannic.herokuapp.com/";

  const api = axios.create({ baseURL: BASEURL });
  api.defaults.headers.common["Authorization"] = "KEVII1!";

  useEffect(() => {
    api.get("/api/v1/venue/admin/search").then((res) => {
      console.log(res);
      setbookingRequest(res.data.venues.slice(0, 15));
    });
    return;
  }, []);


  return (
    <InnerTabs>
      <div tabName="Pending">
      <NewRecurring/>
      </div>
      <h1 tabName="Hello 1">Hello 1 Content</h1>
    </InnerTabs>
  );
};

export default RecurringRequest;
