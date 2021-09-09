import React, {useState} from "react";
import InnerTabs from "../InnerTabs";
import Modal from "react-modal";
import './BookingRequest.css'
import PendingRequest from "./PendingRequest";
import CompletedRequest from "./CompletedRequest";

const BookingRequest = () => {
  const [loading, setLoading] = useState(true); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(179, 179, 179, 0.74)",
    },
    content: {
      height:'300px',
      width: '300px',
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
  
  return (
    <div className='BookingRequestsPageContainer'>
    <InnerTabs>
    <div tabName="Pending">
    <div className='BookingRequestsPageSortBy' onClick={ ()=> setIsModalOpen(true)}>
      Sort By
    </div>
        <PendingRequest/>
    </div>
    <div tabName="Completed">
    <div className='BookingRequestsPageSortBy' onClick={ ()=> setIsModalOpen(true)}>
      Sort By
    </div>
        <CompletedRequest/>
    </div>
    </InnerTabs>
    <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={modalStyle}
    >
      <h1 style={{color:'white'}}>Modal</h1>
    </Modal>
   </div>
  );
  
};

export default BookingRequest;
