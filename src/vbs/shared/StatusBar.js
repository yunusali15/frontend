import React from "react";
import "./StatusBar.css";
import ProgressBar from "./ProgressBar";

const StatusBar = ({ stage, isMobile }) => {
  return (
    <div
      className={isMobile ? "statusBarContainerMobile" : "statusBarContainer"}
    >
      <h1 className={isMobile ? "vbsMobile" : "vbs"}>VENUE BOOKING SYSTEM</h1>
      <ProgressBar stage={stage} />
    </div>
  );
};

export default StatusBar;
