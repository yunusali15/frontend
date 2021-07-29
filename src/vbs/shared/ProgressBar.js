import React from "react";
import { useHistory } from "react-router";
import "./ProgressBar.css";

function ProgressBar({ stage }) {
  let history = useHistory();
  return (
    <div class="progressBarContainers">
      <div class="dot updated">
        <div>
          <span class="line updated"></span>
        </div>
        <p class="caption-venue">VENUE</p>
      </div>
      <div class={stage > 1 ? "dot updated" : "dot"}>
        <div>
          <span class={stage > 1 ? "line updated" : "line"}></span>
        </div>
        <p class="caption-date">DATE</p>
      </div>
      <div class={stage > 2 ? "dot updated" : "dot"}>
        <div>
          <span class={stage > 2 ? "line updated" : "line"}></span>
        </div>
        <p class="caption-details">DETAILS</p>
      </div>
      <div class="dot" style={{ marginRight: "0" }} start>
        <div>
          <span class="line" style={{ width: "0" }}></span>
        </div>
        <p class="caption-submit">SUBMIT</p>
      </div>
    </div>
  );
}

export default ProgressBar;
