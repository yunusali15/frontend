import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { CheckBox } from "./CheckBox.js";
import SpecificReqModal from "../SpecificReqModal/SpecificReqModal";
import { render } from "react-dom";

const PendingRequest = (props) => {
  const PER_PAGE = 15;
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * PER_PAGE;
  const bookingRequest = props.bookingRequest;
  const [filteredData, setFilteredData] = useState(bookingRequest);
  const pageCount = Math.ceil(filteredData.length / PER_PAGE);
  const [modalIsOpen, setIsOpen] = useState(false);
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
    setCurrentPage(0);
    let finalData = [...bookingRequest];
    if (props.ccaFilter.length != 0) {
      console.log(props.ccaFilter);
      finalData = finalData.filter((req) => props.ccaFilter.includes(req.cca));
    }
    if (props.venueFilter.length != 0) {
      console.log(props.venueFilter);

      finalData = finalData.filter((req) =>
        props.venueFilter.includes(req.venue.name)
      );
      console.log(finalData);
    }
    if (props.dateFilter.length != 0) {
      console.log(props.dateFilter);
      finalData = finalData.filter((req) =>
        props.dateFilter.includes(req.date)
      );
    }
    setFilteredData(finalData);
  }, [props.ccaFilter, props.venueFilter, props.dateFilter]);
  return (
    <div className="pendingrequest__main__container">
      <table>
        <thead
          style={{
            borderWidth: "1px",
            borderColor: "#aaaaaa",
            borderStyle: "solid",
          }}
        >
          <th className="BookingRequestPageVenueHeader">Venue</th>
          <th className="BookingRequestPageCCAHeader">CCA</th>
          <th className="BookingRequestPageTimeBookedHeader">Time Booked</th>
          <th className="BookingRequestPagePurposeHeader">Purpose</th>
          <th></th>
        </thead>
        {displayedData.map((req) => (
          <tbody>
            <tr onClick={() => handleRowCLick(req)}>
              <td>{req.venue.name}</td>
              <td>{req.cca}</td>
              <td style={{ display: "inline-flex" }}>
                {req.timingSlots.map((slot) => (
                  <span
                    style={{
                      padding: "5px",
                      marginRight: "4px",
                      background: "#ECDBBA",
                      borderRadius: "1px",
                      fontWeight: "500",
                    }}
                  >
                    {slot}
                  </span>
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
