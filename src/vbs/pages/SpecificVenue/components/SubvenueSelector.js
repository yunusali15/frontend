import React, { Component, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./SubvenueSelector.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SubvenueSelector = ({
  subvenues,
  handleSubvenueSelection,
  selectedSubvenue,
  parentVenue,
}) => {
  var options;

  if (subvenues.length > 1) {
    options = [{ value: parentVenue.id, label: "Whole Venue" }];
    subvenues.map((subvenue) => {
      options.push({ value: subvenue._id, label: subvenue.name });
    });
  } else {
    options = [
      { value: parentVenue.id, label: parentVenue.name + " - Whole Venue" },
    ];
  }

  return (
    <Dropdown
      className="dropdown blink"
      controlClassName="dropdown__control"
      menuClassName="dropdown__menu"
      placeholderClassName="dropdown__placeholder"
      arrowClosed={
        <span className="arrow-closed">
          <p>
            <IoIosArrowDown />
          </p>
        </span>
      }
      arrowOpen={
        <span className="arrow-open">
          <p>
            <IoIosArrowUp />
          </p>
        </span>
      }
      options={options}
      value={selectedSubvenue}
      placeholder={`SELECT ${parentVenue.name.toUpperCase()} SEGMENT TO PROCEED`}
      onChange={handleSubvenueSelection}
    />
  );
};

export default SubvenueSelector;
