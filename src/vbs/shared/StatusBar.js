import React from "react";
import "./StatusBar.css";
import ProgressBar from "./ProgressBar";

const StatusBar = ({ stage, venue }) => {
  return (
    <div className="statusBarContainer">
      <h1 className="vbs">VENUE BOOKING SYSTEM</h1>
      <ProgressBar stage={stage} venue={venue} />
    </div>
  );
};

export default StatusBar;
