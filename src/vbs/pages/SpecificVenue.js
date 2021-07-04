import React, {useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link, useHistory, useParams } from "react-router-dom";

function SpecificVenue() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const history = useHistory();
  const minDate = new Date();
  const venueName = useParams().venueName;
  minDate.setDate(minDate.getDate() + 3);

  function handleButtonClick() {
      history.push(`./${venueName}/bookingpage`,{ selectedDate: selectedDate } )
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
      <Calendar
        minDate={minDate}
        value={selectedDate}
        onChange={setSelectedDate}
      />
      <button onClick={handleButtonClick}>Choose this Date</button>
    </div>
  );
}

export default SpecificVenue;
