import React, { useState } from "react";
import "./ScheduleSelect.css";
import TimeslotButton from "./TimeslotButton";

const ScheduleDisplay = ({
  timeslots,
  selectedDate,
  selectedTimeslot,
  setSelectedTimeslot,
}) => {
  return (
    <div class="mainScheduleContainer">
      <p class="selectedDateDisplay">{selectedDate.toDateString()}</p>
      <div class="timeSlotContainer">
        <p class="schedulePreview">Schedule Preview</p>
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
    </div>
  );
};

export default ScheduleDisplay;
