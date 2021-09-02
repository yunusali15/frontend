import React, {useState} from "react";
import InnerTabs from "../InnerTabs";
import './BookingRequest.css'
import PendingRequest from "./PendingRequest";
import CompletedRequest from "./CompletedRequest";

const BookingRequest = () => {
  const [loading, setLoading] = useState(true); 
  
  return (
    <InnerTabs>
      <div tabName="Pending">
          <PendingRequest/>
      </div>
      <div tabName="Completed">
          <CompletedRequest/>
      </div>
    </InnerTabs>

  );
  
};

export default BookingRequest;
