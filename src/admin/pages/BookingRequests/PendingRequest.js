import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { CheckBox } from "./CheckBox.js";
import SpecificReqModal from "../SpecificReqModal/SpecificReqModal";

const PendingRequest = (props) => {
  const PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(0);
  // const [offset, setOffset] = useState(currentPage * PER_PAGE);
  const offset = currentPage * PER_PAGE;
  const bookingRequest = props.bookingRequest;
  const pageCount = Math.ceil(bookingRequest.length / PER_PAGE);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(bookingRequest);
  const displayedData = filteredData.slice(offset, offset + PER_PAGE);

  function openModal() {
    // fetchData();
    setIsOpen(true);
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const handleRowCLick = (id) => {};

  useEffect(() => {
    let finalData = [...bookingRequest];
    console.log("change");
    if (props.ccaFilter.length != 0) {
      finalData.filter((req) => props.ccaFilter.includes(req.cca));
    }
    if (props.venueFilter.length != 0) {
      console.log("filtered " + props.venueFilter);
      finalData = finalData.filter((req) =>
        props.venueFilter.includes(req.venue.name)
      );
      console.log(finalData);
    }
    if (props.dateFilter.length != 0) {
      finalData.filter((req) => props.dateFilter.includes(req.date));
    }
    setFilteredData(finalData);
  }, [props.ccaFilter, props.venueFilter, props.dateFilter]);

  return (
    <div style={{ width: "100%" }}>
      <table>
        <thead>
          <th>
            <CheckBox></CheckBox>
          </th>
          <th className="BookingRequestPageVenueHeader">Venue</th>
          <th className="BookingRequestPageCCAHeader">CCA</th>
          <th className="BookingRequestPageTimeBookedHeader">Time Booked</th>
          <th className="BookingRequestPagePurposeHeader">Purpose</th>
          <th></th>
        </thead>
        {displayedData.map((req) => (
          <tbody>
            <tr onClick={() => handleRowCLick(req.id)}>
              <td>
                <CheckBox></CheckBox>
              </td>
              <td>{req.venue.name}</td>
              <td>{req.cca}</td>
              <td
                style={{
                  display: "inline-flex",
                  justifyContent: "space-around",
                }}
              >
                {req.timingSlots.map((slot) => (
                  <div
                    style={{
                      padding: "4px",
                      marginRight: "4px",
                      background: "#ECDBBA",
                      borderRadius: "1px",
                      fontWeight: "500",
                    }}
                  >
                    {slot}
                  </div>
                ))}
              </td>
              <td>{req.notes}</td>
              <td>
                <SpecificReqModal req={req} bookingRequests={bookingRequest} />
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <ReactPaginate
        previousLabel={"←"}
        nextLabel={"→"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default PendingRequest;
