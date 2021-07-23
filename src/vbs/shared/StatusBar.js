import React from "react";
import "./StatusBar.css";
import ProgressBar from "./ProgressBar";

const StatusBar = ({ stage }) => {
  return (
    <div className="statusBarContainer">
      <h1 className="vbs">VENUE BOOKING SYSTEM</h1>
      <ProgressBar stage={stage} />
    </div>
  );
};

export default StatusBar;
