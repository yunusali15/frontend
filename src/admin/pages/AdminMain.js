import React, { useState } from "react";
import "./AdminMain.css";
import OuterTabs from "./OuterTabs";
import BookingRequest from "./BookingRequests/BookingRequest";
import { useHistory } from "react-router-dom";
import { MdSettingsInputComponent } from "react-icons/md";
import RecurringRequest from "./RecurringRequests/RecurringBooking";
import RecurringBooking from "./RecurringRequests/RecurringBooking";


const AdminMain = () => {
  const history = useHistory();
  const [tabNumber, setTabNumber] = useState(1);
  function handleClick() {
    history.push("/adminview");
  }

  return (
    <div className="adminMain">
      <OuterTabs>
        <div tabName="Venue Management">Venue Management</div>
        <BookingRequest tabName="Booking Request" />
        <RecurringBooking tabName='Recurring Booking' />
        <div tabName="Calendar View">Calendar View</div>
      </OuterTabs>
    </div>
  );
};

export default AdminMain;
