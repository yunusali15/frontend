import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ModifiedCalendar from "../../pages/SpecificVenue/components/Calendar";
import ScheduleSelect from "../../pages/SpecificVenue/components/ScheduleSelect";
import SelectedDisplay from "../../pages/SpecificVenue/components/SelectedDisplay";
import SubvenueSelector from "./components/SubvenueSelector";
import { Link, useLocation, useParams } from "react-router-dom";
import StatusBar from "../../shared/StatusBar";
import "./SpecificVenue.css";
import Modal from "react-modal";
import axios from "axios";

//data meant to be HTTP Requested from backend
const TIMEDATA = [
  { id: 0, timeStart: "0900 ", timeEnd: "0930", booked: false },
  { id: 1, timeStart: "0930 ", timeEnd: "1000", booked: false },
  { id: 2, timeStart: "1000 ", timeEnd: "1030", booked: false },
  { id: 3, timeStart: "1030 ", timeEnd: "1100", booked: false },
  { id: 4, timeStart: "1100 ", timeEnd: "1130", booked: false },
  { id: 5, timeStart: "1130 ", timeEnd: "1200", booked: false },
  { id: 6, timeStart: "1200 ", timeEnd: "1230", booked: false },
  { id: 7, timeStart: "1230 ", timeEnd: "1300", booked: false },
  { id: 8, timeStart: "1300 ", timeEnd: "1330", booked: false },
  { id: 9, timeStart: "1330 ", timeEnd: "1400", booked: false },
  { id: 10, timeStart: "1400", timeEnd: "1430", booked: false },
  { id: 11, timeStart: "1430", timeEnd: "1500", booked: false },
  { id: 12, timeStart: "1500", timeEnd: "1530", booked: false },
  { id: 13, timeStart: "1530", timeEnd: "1600", booked: false },
  { id: 14, timeStart: "1600", timeEnd: "1630", booked: false },
  { id: 15, timeStart: "1630", timeEnd: "1700", booked: false },
  { id: 16, timeStart: "1700", timeEnd: "1730", booked: false },
  { id: 17, timeStart: "1730", timeEnd: "1800", booked: false },
  { id: 18, timeStart: "1800", timeEnd: "1830", booked: false },
  { id: 19, timeStart: "1830", timeEnd: "1900", booked: false },
  { id: 20, timeStart: "1900", timeEnd: "1930", booked: false },
  { id: 21, timeStart: "1930", timeEnd: "2000", booked: false },
  { id: 22, timeStart: "2000", timeEnd: "2030", booked: false },
  { id: 23, timeStart: "2030", timeEnd: "2100", booked: false },
  { id: 24, timeStart: "2100", timeEnd: "2130", booked: false },
  { id: 25, timeStart: "2130", timeEnd: "2200", booked: false },
  { id: 26, timeStart: "2200", timeEnd: "2230", booked: false },
  { id: 27, timeStart: "2230", timeEnd: "2300", booked: false },
  { id: 28, timeStart: "2300", timeEnd: "2330", booked: false },
  { id: 29, timeStart: "2330", timeEnd: "0000", booked: false },
];

function SpecificVenue() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeslots, setTimeslots] = useState(TIMEDATA);
  const [selectedTimeslot, setSelectedTimeslot] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubvenue, setSelectedSubvenue] = useState(undefined);
  const [bookedSlots, setBookedSlots] = useState(undefined);
  const venueId = useParams().venueId;
  const venue = useLocation().state.venue;
  const subvenues = venue.childVenues;
  const api = axios.create({ baseURL: "https://britannic.herokuapp.com/" });

  function handleSubvenueSelection(e) {
    setSelectedSubvenue(e);
    api
      .get(
        `api/v1/booking/get?venueId=6100d84eb4051df2f0baef1f&startDate=20210809&endDate=20211225`
      )
      .then((res) => setBookedSlots(res.data.bookings));
  }

  function handleSelectedDateChange(selectedDate) {
    console.log(bookedSlots);
    setSelectedDate(selectedDate);
    fetchAndSetTimeslots(selectedDate);
  }

  function fetchAndSetTimeslots(selectedDate) {
    const parsedDate = parseSelectedDate(selectedDate);
    const bookedArray = bookedSlots[`${parsedDate}`];
    console.log(bookedArray);
    TIMEDATA.map((i) => (i.booked = false));
    bookedArray && bookedArray.map((i) => (TIMEDATA[i].booked = true));
    setTimeslots(TIMEDATA);
  }

  function parseSelectedDate(selectedDate) {
    return `${selectedDate.getFullYear()}/${
      selectedDate.getMonth() < 9
        ? "0" + (selectedDate.getMonth() + 1)
        : selectedDate.getMonth() + 1
    }/${selectedDate.getDate()}`;
  }

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(179, 179, 179, 0.74)",
    },
    content: {
      padding: "0 0",
      border: "0 0",
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  };

  Modal.setAppElement("#root");

  //to determine if isMobile
  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 500);
  }

  // useEffect(() => {
  //   window.addEventListener("resize", handleWindowSizeChange);
  //   return () => {
  //     window.removeEventListener("resize", handleWindowSizeChange);
  //   };
  // }, []);

  if (!isMobile) {
    return (
      <div className="mainContainer">
        <StatusBar stage={2} />
        <SubvenueSelector
          subvenues={subvenues}
          handleSubvenueSelection={handleSubvenueSelection}
          selectedSubvenue={selectedSubvenue}
          setSelectedSubvenue={setSelectedSubvenue}
          parentVenue={venue}
        />
        {selectedSubvenue ? (
          <div className="scheduleAndCalendar">
            <div className="specificVenueLeftSide">
              <ModifiedCalendar
                selectedDate={selectedDate}
                handleSelectedDateChange={handleSelectedDateChange}
              />
              <SelectedDisplay selectedTimeslot={selectedTimeslot} />
            </div>
            <ScheduleSelect
              selectedDate={selectedDate}
              timeslots={timeslots}
              setTimeslots={setTimeslots}
              selectedTimeslot={selectedTimeslot}
              setSelectedTimeslot={setSelectedTimeslot}
            />
          </div>
        ) : (
          <div className="scheduleAndCalendar blackout">
            <p>Select Subvenue above to view schedule</p>
          </div>
        )}

        <div className="bottomNavigation">
          <Link className="backButton" to="/vbs">
            Back
          </Link>
          <p className="selectDNT">
            {selectedDate && selectedTimeslot.length
              ? ""
              : "Select Date and Time to Submit"}
          </p>
          {selectedDate && selectedTimeslot.length > 0 ? (
            <Link
              to={{
                pathname: `/vbs/${venueId}/bookingpage`,
                state: { selectedDate, selectedTimeslot },
              }}
              className="submitButton enabled"
            >
              Submit
            </Link>
          ) : (
            <div className="submitButton disabled">Submit</div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mainContainer">
        <StatusBar stage={2} />
        <h1 className="banner">{venueId}</h1>
        <div className="specifcVenueCalendarContainerMobile">
          <ModifiedCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            isMobile={isMobile}
          />
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={modalStyle}
        >
          <ScheduleSelect
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            timeslots={timeslots}
            setTimeslots={setTimeslots}
            selectedTimeslot={selectedTimeslot}
            setSelectedTimeslot={setSelectedTimeslot}
            isMobile={isMobile}
          />
          <SelectedDisplay selectedTimeslot={selectedTimeslot} />
          <div className="bottomNavigationModal">
            <div
              className="backButton modal"
              onClick={() => setIsModalOpen(false)}
            >
              Back
            </div>
            {selectedDate && selectedTimeslot.length > 0 ? (
              <Link
                to={{
                  pathname: `/vbs/${venueId}/bookingpage`,
                  state: { selectedDate, selectedTimeslot },
                }}
                className="submitButtonMobile enabled "
              >
                Submit
              </Link>
            ) : (
              <div className="submitButtonMobile disabled">Submit</div>
            )}
          </div>
        </Modal>
        <div className="bottomNavigation">
          <Link className="backButton buttonMobile" to="/vbs">
            Back
          </Link>
          {selectedDate ? (
            <div
              className="submitButton enabled buttonMobile"
              onClick={setIsModalOpen}
            >
              Next
            </div>
          ) : (
            <div className="submitButton disabled buttonMobile">Next</div>
          )}
        </div>
        {!selectedDate && <p className="selectDNT">Select Date to proceed</p>}
      </div>
    );
  }
}

export default SpecificVenue;
