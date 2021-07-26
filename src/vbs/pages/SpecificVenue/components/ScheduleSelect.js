import React, { useState } from "react";
import "./ScheduleSelect.css";
import TimeslotButton from "./TimeslotButton";

const ScheduleSelect = ({
  timeslots,
  selectedDate,
  selectedTimeslot,
  setSelectedTimeslot,
  isMobile,
}) => {
  return (
    <div
      className="mainScheduleContainer"
      style={isMobile ? { width: "100%" } : { width: "30%" }}
    >
      <p class="selectedDateDisplay">
        {selectedDate
          ? `${selectedDate.getDate()} ${selectedDate
              .toDateString()
              .substring(4, 7)} ${selectedDate.getFullYear()}`
          : "Select Date"}
      </p>
      <div class="timeSlotContainer">
        <p class="schedulePreview">{"Select Timeslot(s)"}</p>
        <div class="timeSlots">
          {timeslots.map((time) => (
            <TimeslotButton
              time={time}
              timeslots={timeslots}
              selectedTimeslot={selectedTimeslot}
              setSelectedTimeslot={setSelectedTimeslot}
            />
          ))}
        </div>
      </div>
      <div class="legend">
        <div class="legendBox" style={{ backgroundColor: "#346751" }}>
          Available
        </div>
        <div class="legendBox" style={{ backgroundColor: "#888888" }}>
          Unavailable
        </div>
      </div>
    </div>
  );
};

export default ScheduleSelect;
