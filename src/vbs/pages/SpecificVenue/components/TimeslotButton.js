import React, { useState } from "react";

const TimeslotButton = ({ time, selectedTimeslot, setSelectedTimeslot }) => {
  function handleButtonClick(time) {
    let temp = [...selectedTimeslot];
    if (time.selected) {
      temp = temp.filter((i) => i["id"] != time["id"]);
    } else {
      temp.push(time);
    }
    temp.sort((e1, e2) => (e1.id > e2.id ? 1 : -1));
    setSelectedTimeslot(temp);
    time.selected = !time.selected;
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
        !time.selected
          ? { backgroundColor: "#346751" }
          : { backgroundColor: "#c84b31" }
      }
    >
      <p class="timeSlotText">{time.timeStart + " - " + time.timeEnd}</p>
    </button>
  );
};

export default TimeslotButton;
