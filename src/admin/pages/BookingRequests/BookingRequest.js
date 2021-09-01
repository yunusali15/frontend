import React, { useState, useEffect } from "react";
import InnerTabs from "../InnerTabs";
import axios from "axios";
import { ApproveReject } from "./ApproveReject";
import './BookingRequest.css'
import {FcNext} from 'react-icons/fc'
import {FcPrevious} from 'react-icons/fc'
import { BeatLoader } from "react-spinners";

const BookingRequest = () => {
  const [bookingRequest, setbookingRequest] = useState([]);
  const [loading, setLoading] = useState(true); 

  const BASEURL = "https://britannic.herokuapp.com/";

  const api = axios.create({ baseURL: BASEURL });
  api.defaults.headers.common["Authorization"] = "KEVII1!";

  useEffect(() => {
    api.get("/api/v1/bookingreq/all").then((res) => {
      console.log(res);
      setbookingRequest(res.data.bookingRequest.slice(0,res.data.bookingRequest.length));

    });
    return;
  }, []);

  useEffect(() => {
    console.log(bookingRequest);
    setLoading(false)
  }, [bookingRequest])

  const nextPage = () => {}
  const previousPage = () => {}
  
  return (
    <InnerTabs>
      <div tabName="Pending">
      {loading ? (
        <>
          <p>Loading</p>
          <BeatLoader color="black" loading={true} />
        </>
      ) : (
            <div>
                <table>
                    <thead>
                        <th>Time</th>
                        <th>Venue</th>
                        <th>CCA</th>
                        <th>Purpose</th>
                        <th></th>
                    </thead>
                        {bookingRequest.map((req) => 
                        <tbody>
                            <td>{new Date(req.createdAt).toLocaleTimeString('en-US')}</td>
                            <td>{req.venue.name}</td> 
                            <td>{req.cca}</td>
                            <td>{req.notes}</td>
                            <td>{req.timingSlots}</td>
                            <td><ApproveReject /></td>
                        </tbody>
                        )}
                </table>
                <div>
                    <span>
                        {/* Page {pageIndex +1} of {pageOptions.length} {''} */}
                    </span>
                    
                    <FcPrevious onClick={() => previousPage()}/>
                    <FcNext onClick={() => nextPage()} />
                </div>
            </div>
      )}

      </div>
      <h1 tabName="Hello 1">Hello 1 Content</h1>
    </InnerTabs>

  );
  
};

export default BookingRequest;
