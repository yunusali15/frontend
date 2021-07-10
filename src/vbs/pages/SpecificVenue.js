import React, { useState } from "react";
import ModifiedCalendar from "../components/Calendar";
import ScheduleDisplay from "../components/ScheduleDisplay";
import { Link, useHistory, useParams } from "react-router-dom";
import './SpecificVenue.css'

function SpecificVenue() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const history = useHistory();
  const minDate = new Date();
  const venueName = useParams().venueName;
  minDate.setDate(minDate.getDate() + 3);

  function handleButtonClick() {
    history.push(`./${venueName}/bookingpage`, { selectedDate: selectedDate });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{venueName}</h1>
      <div class='scheduleAndCalendar'>
        <ScheduleDisplay />
        <ModifiedCalendar />
      </div>
    </div>
  );
}

export default SpecificVenue;
