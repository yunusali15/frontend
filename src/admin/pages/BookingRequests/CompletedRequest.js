import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const CompletedRequest = (props) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [bookingRequest, setBookingRequest] = useState(props.bookingRequest)
    const PER_PAGE = 12;
    const offset = currentPage * PER_PAGE;
    const currentPageData = bookingRequest.slice(offset, offset + PER_PAGE);
    const pageCount = Math.ceil(bookingRequest.length / PER_PAGE);
  
  
    function handlePageClick({ selected: selectedPage }) {
      setCurrentPage(selectedPage);
    }
    
    return (
        <div>
        <table>
            <thead>
                <th className='BookingRequestPageVenueHeader'>Venue</th>
                <th className='BookingRequestPageCCAHeader'>CCA</th>
                <th className='BookingRequestPageTimeBookedHeader'>Time Booked</th>
                <th className='BookingRequestPagePurposeHeader'>Purpose</th>
                <th></th>
            </thead>
                {currentPageData.map((req) => 
                <tbody>
                    <td>{req.venue.name}</td> 
                    <td>{req.cca}</td>
                    <td style={{display: 'inline-flex', justifyContent:"space-around"}}>
                        {req.timingSlots.map((slot) =>
                        <div style={{padding:'4px',marginRight:'4px',background: "#ECDBBA", borderRadius: '1px', fontWeight:'500'}}>
                            {slot}
                        </div>
                    )}</td>
                    <td>{req.notes}</td> 
                    {req.isApproved ? 
                    (<td style={{color:'#c84b31', textAlign:'center', fontWeight:'700', fontSize:'16px'}}> APPROVED </td>): 
                    (<td style={{color:'#346751', textAlign:'center', fontWeight:'700', fontSize:'16px'}}> REJECTED </td>)
                    }
                </tbody>
                )}
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
    )
}

export default CompletedRequest
