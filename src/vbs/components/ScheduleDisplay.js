import React from "react";
import "./ScheduleDisplay.css";

const DATA = [
  { time: "09:00", booked: false },
  { time: "09:30", booked: false },
  { time: "10:00", booked: true },
  { time: "10:30", booked: true },
  { time: "11:00", booked: true },
  { time: "11:30", booked: true },
  { time: "12:00", booked: false },
  { time: "12:30", booked: false },
  { time: "13:00", booked: false },
  { time: "13:30", booked: false },
  { time: "14:00", booked: true },
  { time: "14:30", booked: false },
  { time: "15:00", booked: false },
  { time: "15:30", booked: false },
  { time: "16:00", booked: true },
  { time: "16:30", booked: false },
  { time: "17:00", booked: true },
  { time: "17:30", booked: false },
  { time: "18:00", booked: false },
  { time: "18:30", booked: true },
  { time: "19:00", booked: false },
  { time: "19:30", booked: false },
  { time: "20:00", booked: false },
  { time: "20:30", booked: false },
  { time: "21:00", booked: false },
  { time: "21:30", booked: false },
  { time: "22:00", booked: false },
  { time: "22:30", booked: false },
  { time: "23:00", booked: false },
  { time: "23:30", booked: false },
];

const ScheduleDisplay = ({ selectedDate }) => {
  return (
    <div class="mainContainer">
      <p class="selectedDateDisplay">{selectedDate.toDateString()}</p>
      <div class="timeSlotContainer">
        <p class="schedulePreview">Schedule Preview</p>
        <div class="timeSlots">
          {DATA.map((time) => (
            <p class={time.booked ? 'timeSlotBooked' : 'timeSlotAvailable'}>{time.time}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleDisplay;
