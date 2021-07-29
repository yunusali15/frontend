import React from "react";
import { useHistory } from "react-router";
import "./ProgressBar.css";

function ProgressBar({ stage }) {
  let history = useHistory();

  return (
    <div class="container">
      <div class="dot updated" contentEditable="false">
        <div>
          <span class="line updatedLine"></span>
        </div>
        <p class="caption-venue">VENUE</p>
      </div>
      <div class={stage > 1 ? "dot updated" : "dot"} contentEditable="false">
        <div>
          <span class={stage > 1 ? "line updatedLine" : "line"}></span>
        </div>
        <p class="caption-date">DATE</p>
      </div>
      <div class={stage > 2 ? "dot updated" : "dot"} contentEditable="false">
        <div>
          <span class={stage > 2 ? "line updatedLine" : "line"}></span>
        </div>
        <p class="caption-details">DETAILS</p>
      </div>
      <div class={stage > 3 ? "dot updated" : "dot"} contentEditable="false">
        <div>
          <span class="line4"></span>
        </div>
        <p class="caption-submit">SUBMIT</p>
      </div>
    </div>
  );
}

export default ProgressBar;
