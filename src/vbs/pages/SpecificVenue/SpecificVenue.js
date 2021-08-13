import React, { useEffect, useState } from "react";
import ModifiedCalendar from "../../pages/SpecificVenue/components/Calendar";
import ScheduleSelect from "../../pages/SpecificVenue/components/ScheduleSelect";
import SelectedDisplay from "../../pages/SpecificVenue/components/SelectedDisplay";
import SubvenueSelector from "./components/SubvenueSelector";
import { Link, useLocation, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { ImArrowUp } from "react-icons/im";

import StatusBar from "../../shared/StatusBar";
import "./SpecificVenue.css";
import Modal from "react-modal";
import axios from "axios";
import TIMEDATA from "./TIMEDATA";

function SpecificVenue() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeslots, setTimeslots] = useState(TIMEDATA);
  const [selectedTimeslot, setSelectedTimeslot] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubvenue, setSelectedSubvenue] = useState(undefined);
  const [bookedSlots, setBookedSlots] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const venueId = useParams().venueId;
  const venue = useLocation().state.venue;
  const subvenues = venue.childVenues;
  const api = axios.create({ baseURL: "https://britannic.herokuapp.com/" });

  function handleSubvenueSelection(e) {
    setLoading(true);
    api
      .get(
        `api/v1/booking/get?venueId=${e.value}&startDate=20210809&endDate=20211225`
      )
      .then((res) => {
        setSelectedSubvenue(e);
        setBookedSlots(res.data.bookings);
        setSelectedTimeslot([]);
        setSelectedDate(null);
        TIMEDATA.map((i) => (i.selected = false));
        setTimeslots(TIMEDATA);
        setLoading(false);
      });
  }

  function handleSelectedDateChange(selectedDate) {
    setSelectedDate(selectedDate);
    fetchAndSetTimeslots(selectedDate);
    setSelectedTimeslot([]);
  }

  function fetchAndSetTimeslots(selectedDate) {
    const parsedDate = parseSelectedDate(selectedDate);
    //forces program to wait before trying to retrieve
    while (!bookedSlots) {
      setTimeout(() => console.log("wait"), 3000);
    }
    const bookedArray = bookedSlots[`${parsedDate}`];
    console.log(bookedArray);
    TIMEDATA.map((i) => {
      i.booked = false;
      i.selected = false;
    });
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

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

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
            {loading ? (
              <>
                <p>Loading</p>
                <BeatLoader color="white" loading={true} />
              </>
            ) : (
              <p>
                <ImArrowUp />
                Select Subvenue above to view schedule
                <ImArrowUp />
              </p>
            )}
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
                state: {
                  selectedDate,
                  selectedTimeslot,
                  venue,
                  selectedSubvenue,
                },
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
        <SubvenueSelector
          subvenues={subvenues}
          handleSubvenueSelection={handleSubvenueSelection}
          selectedSubvenue={selectedSubvenue}
          setSelectedSubvenue={setSelectedSubvenue}
          parentVenue={venue}
        />
        {selectedSubvenue && !loading ? (
          <div className="specifcVenueCalendarContainerMobile">
            <ModifiedCalendar
              selectedDate={selectedDate}
              handleSelectedDateChange={handleSelectedDateChange}
              isMobile={isMobile}
            />
          </div>
        ) : loading ? (
          <>
            <p>Loading</p>
            <BeatLoader color="black" loading={true} />
          </>
        ) : (
          <div />
        )}

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
            handleSelectedDateChange={handleSelectedDateChange}
            isMobile={isMobile}
          />
          <SelectedDisplay selectedTimeslot={selectedTimeslot} />
          <div className="bottomNavigationModal">
            <div className="backButton" onClick={() => setIsModalOpen(false)}>
              Back
            </div>
            {selectedDate && selectedTimeslot.length > 0 ? (
              <Link
                to={{
                  pathname: `/vbs/${venueId}/bookingpage`,
                  state: {
                    selectedDate,
                    selectedTimeslot,
                    venue,
                    selectedSubvenue,
                  },
                }}
                className="submitButton enabled "
              >
                Submit
              </Link>
            ) : (
              <div className="submitButton disabled">Submit</div>
            )}
          </div>
        </Modal>
        {selectedSubvenue && !loading && (
          <div className="bottomNavigation">
            <Link className="backButton" to="/vbs">
              Back
            </Link>
            {selectedDate ? (
              <div className="submitButton enabled" onClick={setIsModalOpen}>
                Next
              </div>
            ) : (
              <div className="submitButton disabled">Next</div>
            )}
          </div>
        )}
        {selectedSubvenue && !loading && !selectedDate ? (
          <p className="selectDNT">Select Date to proceed</p>
        ) : (
          <p />
        )}
      </div>
    );
  }
}

export default SpecificVenue;
