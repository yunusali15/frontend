import React, { useState, useEffect } from "react";
import InnerTabs from "./InnerTabs";
import FilterSort from "./FilterSort";
import axios from "axios";

const BookingRequest = () => {
  const [bookingRequest, setbookingRequest] = useState([]);
  const BASEURL = "https://britannic.herokuapp.com/";

  const api = axios.create({ baseURL: BASEURL });
  api.defaults.headers.common["Authorization"] = "KEVII1!";

  useEffect(() => {
    api.get("/api/v1/bookingreq/all").then((res) => {
      console.log(res);
      setbookingRequest(res.data.bookingRequest.slice(0, 15));
    });
    return;
  }, []);

  return (
    <InnerTabs>
      <div>
      
          <FilterSort 
            allRequests = {bookingRequest}></FilterSort>
        
      </div>
      <div tabName="Pending">
        {bookingRequest.map((req) => (
          <p>{req.id}</p>
        ))}
      </div>
      <h1 tabName="Hello 1">Hello 1 Content</h1>
    </InnerTabs>
  );
};

export default BookingRequest;
