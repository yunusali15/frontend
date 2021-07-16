import React from "react";
import "./SelectedDisplay.css";

const SelectedDisplay = ({ selectedTimeslot }) => {
  return (
    <div class="selectedDisplayContainer">
      <p class="selectedTime">Selected Time: </p>
      <p>{selectedTimeslot.map((i) => i.time + ", ")}</p>
    </div>
  );
};

export default SelectedDisplay;
