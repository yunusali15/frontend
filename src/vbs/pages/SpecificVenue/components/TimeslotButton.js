import React, { useState } from "react";

const TimeslotButton = ({
  time,
  timeslots,
  selectedTimeslot,
  setSelectedTimeslot,
}) => {
  const [clicked, setClick] = useState(false);
  function handleButtonClick(time) {
    let temp = [...selectedTimeslot];
    if (clicked) {
      temp = temp.filter((i) => i["id"] != time["id"]);
    } else {
      temp.push(time);
    }
    temp.sort((e1, e2) => (e1.id > e2.id ? 1 : -1));
    setSelectedTimeslot(temp);
    setClick(!clicked);
  }

  return time.booked ? (
    <button class="timeSlot timeSlotBooked" disabled>
      <p class="timeSlotText">{time.timeStart + " - " + time.timeEnd}</p>
    </button>
  ) : (
    <button
      class="timeSlot timeSlotAvailable"
      onClick={() => handleButtonClick(time)}
      style={
        !clicked
          ? { backgroundColor: "#346751" }
          : { backgroundColor: "#c84b31" }
      }
    >
      <p class="timeSlotText">{time.timeStart + " - " + time.timeEnd}</p>
    </button>
  );
};

export default TimeslotButton;
