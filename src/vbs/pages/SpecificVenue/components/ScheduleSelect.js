import React, { useState } from "react";
import "./ScheduleSelect.css";
import TimeslotButton from "./TimeslotButton";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ScheduleSelect = ({
  timeslots,
  selectedDate,
  setSelectedDate,
  selectedTimeslot,
  setSelectedTimeslot,
  isMobile,
}) => {
  const today = new Date();
  let minDate = new Date();
  minDate.setDate(today.getDate() + 3);

  function handleBackButton() {
    let date = new Date(selectedDate);
    date.setDate(date.getDate() - 1);
    setSelectedDate(date);
  }

  function handleForwardButton() {
    let date = new Date(selectedDate);
    date.setDate(date.getDate() + 1);
    setSelectedDate(date);
  }
  return (
    <div
      className="mainScheduleContainer"
      style={isMobile ? { width: "100%" } : { width: "30%" }}
    >
      {isMobile ? (
        <div className="topNavigationMobile">
          <p className="IconTopNavigationMobile" onClick={handleBackButton}>
            {selectedDate > minDate ? <MdKeyboardArrowLeft /> : ""}
          </p>
          )
          <p class="selectedDateDisplay">{`${selectedDate.getDate()} ${selectedDate
            .toDateString()
            .substring(4, 7)} ${selectedDate.getFullYear()}`}</p>
          <p className="IconTopNavigationMobile" onClick={handleForwardButton}>
            {" "}
            <MdKeyboardArrowRight />
          </p>
        </div>
      ) : (
        <p class="selectedDateDisplay">
          {selectedDate
            ? `${selectedDate.getDate()} ${selectedDate
                .toDateString()
                .substring(4, 7)} ${selectedDate.getFullYear()}`
            : "Select Date"}
        </p>
      )}
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
