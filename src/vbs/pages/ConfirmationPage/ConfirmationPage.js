import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./ConfirmationPage.css"
import StatusBar from "../../shared/StatusBar";

const ConfirmationPage = () => {
  return (
    <div className="confirmationContainer">
      <StatusBar stage={4}/>
      <div className="submitContainer">
        <div className="submitContainer-text">
          <h2 className="submitContainer-title">Submitted!</h2>
          <p>A receipt of your venue booking will be sent to the email provided.</p>
          <p>The status of your booking will be updated in 3-5 working days through the same email address.</p>
          <p>Thank you for your patience!</p>
        </div>
      </div>
      <div className="bottomNavigation">
        <Link className="confirmationHomeButton confirmationHomeButtonMobile" to="/">
          HOME
        </Link>
        <Link className="confirmationNewButton confirmationNewButtonMobile" to="/vbs">
          NEW BOOKING
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
