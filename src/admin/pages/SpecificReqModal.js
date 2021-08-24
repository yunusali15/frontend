import React, { useState } from "react";
import "./SpecificReqModal.css";
import axios from "axios";
import Modal from "react-modal";



function SpecificReqModal() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [CCA, setCCA] = useState();
    const [ID, setID] = useState();
    const [email, setEmail] = useState();
    const [reqDate, setReqDate] = useState();
    const [bookDate, setBookDate] = useState();
    const [purpose, setPurpose] = useState();    
    const [venue, setVenue] = useState();

    const api = axios.create({ baseURL: "https://britannic.herokuapp.com/" });
    const token = 'KEVII1!';


    function getDate(unix_date) {
        var date = new Date(unix_date * 1000);
        var hours = date.getHours();
        var minutes = date.getMinutes();

        var formattedTime = hours + ":" + minutes.toString().substring(-2);
        setBookDate(formattedTime);
    }

    function fetchData() {
        // api
        //     .get(
        //         // `/api/v1/bookingreq/?bookingRequestId=610d6f6cf210a28425b80dea`
        //         `/api/v1/bookingreq/intent?bookingRequestId=6108b789ef225d3be9e40e09`, {
        //             headers: {
        //                 Authorization: 'Bearer ' + token
        //             }
        //         }
        //     )
        axios.get('https://britannic.herokuapp.com//api/v1/bookingreq/intent?bookingRequestId=6108b789ef225d3be9e40e09', {
            headers: {
                'Authorization': `Basic + ${token}`
            }
            })
            .then((res) => {
                console.log(res, "Object retrieved");
                setCCA(res.data.bookingRequest.cca);
                setEmail(res.data.bookingRequest.email);
                setID(res.data.bookingRequest._id);
                setReqDate(res.data.bookingRequest.createdAt);
                getDate(res.data.bookingRequest.date);
                setPurpose(res.data.bookingRequest.notes);
                setVenue(res.data.bookingRequest.venue.name);
            })
    }

    Modal.setAppElement("#root");

    const modalStyle = {
        overlay: {
            backgroundColor: "white",
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


    function openModal() {
        // fetchData();
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={() => {openModal()}}>Click to open modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <button onClick={() => {closeModal()}}>Close</button>
                <button onClick={() => {fetchData()}}>Fetch</button>
                <div className="specificreqmodal__tablecontainer">
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
                            <td>Time booked</td>
                            <td>{ bookDate }</td>
                            <td>"time slots go here"</td>
                            <td>Email</td>
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
                    <tr className="specificreqmodal__td__bg">
                        <th>Time</th>
                        <th>CCA</th>
                        <th>Time Booked</th>
                        <th>Purpose</th>
                        <th>Other Conflicts</th>
                    </tr>
                    <tbody>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tbody>
                </table>
                <h3>Pending Conflicts</h3>
                <table className="specificreqmodal__table" cellSpacing="0">
                    <tr className="specificreqmodal__td__bg">
                        <th>Time</th>
                        <th>CCA</th>
                        <th>Time Booked</th>
                        <th>Purpose</th>
                        <th>Other Conflicts</th>
                    </tr>
                    <tbody>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tbody>
                </table>
                </div>
            </Modal>
        </div>
    )
}

export default SpecificReqModal;