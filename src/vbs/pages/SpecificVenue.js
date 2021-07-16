import React, { useState } from "react";
import ModifiedCalendar from "../components/Calendar";
import ScheduleSelect from "../components/ScheduleSelect";
import SelectedDisplay from "../components/SelectedDisplay";
import { Link, useHistory, useParams } from "react-router-dom";
import "./SpecificVenue.css";

//data meant to be HTTP Requested from backend
const DATA = [
  { id: 0, time: "0900 - 0930", booked: false },
  { id: 1, time: "0930 - 1000", booked: false },
  { id: 2, time: "1000 - 1030", booked: true },
  { id: 3, time: "1030 - 1100", booked: true },
  { id: 4, time: "1100 - 1130", booked: true },
  { id: 5, time: "1130 - 1200", booked: true },
  { id: 6, time: "1200 - 1230", booked: false },
  { id: 7, time: "1230 - 1300", booked: false },
  { id: 8, time: "1300 - 1330", booked: false },
  { id: 9, time: "1330 - 1400", booked: false },
  { id: 10, time: "1400 - 1430", booked: true },
  { id: 11, time: "1430 - 1500", booked: false },
  { id: 12, time: "1500 - 1530", booked: false },
  { id: 13, time: "1530 - 1600", booked: false },
  { id: 14, time: "1600 - 1630", booked: true },
  { id: 15, time: "1630 - 1700", booked: false },
  { id: 16, time: "1700 - 1730", booked: true },
  { id: 17, time: "1730 - 1800", booked: false },
  { id: 18, time: "1800 - 1830", booked: false },
  { id: 19, time: "1830 - 1900", booked: true },
  { id: 20, time: "1900 - 1930", booked: false },
  { id: 21, time: "1930 - 2000", booked: false },
  { id: 22, time: "2000 - 2030", booked: false },
  { id: 23, time: "2030 - 2100", booked: false },
  { id: 24, time: "2100 - 2130", booked: false },
  { id: 25, time: "2130 - 2200", booked: false },
  { id: 26, time: "2200 - 2230", booked: false },
  { id: 27, time: "2230 - 2300", booked: false },
  { id: 28, time: "2300 - 2330", booked: false },
  { id: 29, time: "2330 - 0000", booked: false },
];

function SpecificVenue() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeslots, setTimeslots] = useState(DATA);
  const [selectedTimeslot, setSelectedTimeslot] = useState([]);

  const history = useHistory();
  const venueName = useParams().venueName;

  function handleButtonClick() {
    history.push(`./${venueName}/bookingpage`, { selectedDate: selectedDate });
  }

  return (
    <div class="mainContainer">
      <h1>{venueName}</h1>
      <div class="scheduleAndCalendar">
        <ScheduleSelect
          selectedDate={selectedDate}
          timeslots={timeslots}
          setTimeslots={setTimeslots}
          selectedTimeslot={selectedTimeslot}
          setSelectedTimeslot={setSelectedTimeslot}
        />
        <div
          style={{
            flexDirection: "column",
            width: "70%",
            height: "100%",
          }}
        >
          <ModifiedCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <SelectedDisplay selectedTimeslot={selectedTimeslot} />
        </div>
      </div>
    </div>
  );
}

export default SpecificVenue;
