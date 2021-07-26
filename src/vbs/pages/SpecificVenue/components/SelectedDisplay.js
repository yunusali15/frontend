import React from "react";
import "./SelectedDisplay.css";

const SelectedDisplay = ({ selectedTimeslot }) => {
  return (
    <div class="selectedDisplayContainer">
      <p class="selectedTime">
        Selected Time ({selectedTimeslot.length * 30 + " minutes"}) : <br />
        {selectedTimeslot.map((i) => i.timeStart + " - " + i.timeEnd + ", ")}
      </p>
    </div>
  );
};

export default SelectedDisplay;
