import React, { useState } from "react";
import { set } from "react-hook-form";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import "./BookingPage.css";

const DATA = [
  { id: 0, timeStart: "08:00", timeEnd: "09:00", selected: false },
  { id: 1, timeStart: "09:00", timeEnd: "10:00", selected: false },
  { id: 2, timeStart: "10:00", timeEnd: "11:00", selected: false },
  { id: 3, timeStart: "11:00", timeEnd: "12:00", selected: false },
  { id: 4, timeStart: "12:00", timeEnd: "13:00", selected: false },
  { id: 4, timeStart: "13:00", timeEnd: "14:00", selected: false },
];

const BookingPage = () => {
  const { venueName } = useParams();
  const { selectedDate } = useLocation().state;
  const [timeIntervals, setTimeIntervals] = useState(DATA);
  const [cca, setCCA] = useState('');
  const [purpose, setPurpose] = useState('');
 
  
  function handleTimeSelect(id) {
    DATA[id].selected = !DATA[id].selected;
    setTimeIntervals(DATA);
    console.log(id);
    console.log(DATA[id].selected);
  }

  return (
    <div class="mainDiv">
      <h1>{`Book ${venueName} on ${selectedDate.toDateString()}`}</h1>
      <form action="">
        <label htmlFor="CCA">CCA </label>
        <input id="CCA" type="text" style={{ width: "50%" }} value={cca} onChange={event => setCCA(event.target.value)} />
        <label htmlFor="purpose">Purpose</label>
        <textarea id="purpose" type="text" cols="80" rows="10" value={purpose} onChange={event => setPurpose(event.target.value)} />
      </form>

      ))
      <Link 
        to={{
          pathname: "/vbs/confirmation",
          state: {
            venueName: venueName,
            selectedDate: selectedDate,
            cca: cca,
            purpose: purpose
          },
        }}
      >
        Submit
      </Link>
    </div>
  );
};

export default BookingPage;
