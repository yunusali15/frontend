import React, {useState } from "react";
import ModifiedCalendar from '../components/Calendar'
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
      <ModifiedCalendar/>
    </div>
  );
}

export default SpecificVenue;
