import React, { useState } from "react";
import "./SpecificReqModal.css";
import axios from "axios";
import Modal from "react-modal";
import { Link } from "react-router-dom";


function SpecificReqModal() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [CCA, setCCA] = useState();
    const [ID, setID] = useState();
    const [email, setEmail] = useState();
    const [reqDate, setReqDate] = useState("Req date is missing from data set");
    const [bookDate, setBookDate] = useState();
    const [purpose, setPurpose] = useState();    
    const [venue, setVenue] = useState();
    const [timeSlots, setTimeSlots] = useState([]);
    const [bookedConflicts, setBookedConflicts] = useState([]);
    const [pendingConflicts, setPendingConflicts] = useState([]);

    const BASEURL = "https://britannic.herokuapp.com/";

    const api = axios.create({ baseURL: BASEURL });
    const token = "KEVII1!";

    api.defaults.headers.common["Authorization"] = "KEVII1!";
    
    function getReqDate(req_date) {
        var date = req_date.substring(0, 10);
        var time = req_date.substring(11,16);
        setReqDate(date + " " + time);
    }

    function fetchData() {
        api
            .get(
                // `/api/v1/bookingreq/?bookingRequestId=610d6f6cf210a28425b80dea`
                `/api/v1/bookingreq/intent?bookingRequestId=611c93c6c27da22407d6cf6c`
            )
            .then((res) => {
                console.log(res, "Object retrieved");
                setCCA(res.data.bookingRequest.cca);
                setEmail(res.data.bookingRequest.email);
                setID(res.data.bookingRequest.id);
                setTimeSlots(res.data.bookingRequest.timingSlots);
                // getReqDate(res.data.bookingRequest.createdAt);
                // getUnixDate(res.data.bookingRequest.date);
                setBookDate(res.data.bookingRequest.date);
                setPurpose(res.data.bookingRequest.notes);
                setVenue(res.data.bookingRequest.venue.name);
                setBookedConflicts(res.data.conflicts);
            })
            console.log(timeSlots);
    }

    function approveIntent() {
        api.post('/api/v1/bookingreq/approve', {
            "bookingRequestId": ID,
        })
        .then((res) => {
            console.log(res);
        })
        .then((e) => {
            console.log(e, "Error in approve intent");
        });
        closeModal();
    }

    Modal.setAppElement("#root");

    const modalStyle = {
        overlay: {
            backgroundColor: "rgba(255, 255, 255, 0.75)",
        },
        content: {
            display: "flex",
            flexDirection: "row",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }

    const closeButtonStyle = {
        position: "absolute",
        top: "10px",
        right: "10px",
        backgroundColor: "Transparent",
        border: "none",
        cursor: "pointer",
        overflow: "hidden",
        outline: "none",
    }


    function openModal() {
        fetchData();
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button className="specificreqmodal__reviewbutton" onClick={() => {openModal()}}>Review Request</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyle}
            >
            <button style={closeButtonStyle} onClick={() => {closeModal()}}>X</button>

                {/* <button onClick={() => {fetchData()}}>Fetch</button> */}
                <div className="specificreqmodal__tablecontainer">
                    <div>
                        <h2>{venue}</h2>
                        <table className="specificreqmodal__table" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <td className="specificreqmodal__td__bg">Request Details</td>
                                    <td>ID:{ ID }</td>
                                    <td>{ reqDate }</td>
                                    <td className="specificreqmodal__td__bg">CCA</td>
                                    <td>{ CCA }</td>
                                </tr>
                                <tr>
                                    <td className="specificreqmodal__td__bg">Time booked</td>
                                    <td>{ bookDate }</td>
                                    <td>
                                        <ul>       
                                            {timeSlots.map(item => {
                                                return <h5 key={item.toString()}>{item}</h5>
                                            })}
                                        </ul>  
                                    </td>
                                    <td className="specificreqmodal__td__bg">Email</td>
                                    <td>{ email }</td>
                                </tr>
                                <tr>
                                    <td className="specificreqmodal__td__bg">Purpose</td>
                                    <td colSpan="4">{ purpose }</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Booked Conflicts</h3>
                        <table className="specificreqmodal__table" cellSpacing="0">
                            <thead>    
                                <tr className="specificreqmodal__td__bg">
                                    <th>Time</th>
                                    <th>CCA</th>
                                    <th>Time Booked</th>
                                    <th>Purpose</th>
                                    <th>Other Conflicts</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookedConflicts.map(item => {
                                    return (
                                        <tr key={ item.toString() }>
                                            <td>{ item.time }</td>
                                            <td>{ item.ccaname }</td>
                                            <td>{ item.timingSlots }</td>
                                            <td>{ item.notes }</td>
                                            <td>{ item.others }</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <h3>Pending Conflicts</h3>
                        <table className="specificreqmodal__table" cellSpacing="0">
                            <thead>    
                                <tr className="specificreqmodal__td__bg">
                                    <th>Time</th>
                                    <th>CCA</th>
                                    <th>Time Booked</th>
                                    <th>Purpose</th>
                                    <th>Other Conflicts</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                {pendingConflicts.map(item => {
                                    return (
                                        <tr key={ item.toString() }>
                                            <td>{ item.time }</td>
                                            <td>{ item.ccaname }</td>
                                            <td>{ item.timingSlots }</td>
                                            <td>{ item.notes }</td>
                                            <td>{ item.others }</td>
                                        </tr>
                                    )
                                })}
                                </tr>
                            </tbody>
                        </table>
                        <div className="bottomNavigation">
                            <Link className="specificreqmodal__rejectbutton">
                                Reject
                            </Link>
                            <Link className="specificreqmodal__acceptbutton" onClick={approveIntent}>
                                Accept
                            </Link>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SpecificReqModal;