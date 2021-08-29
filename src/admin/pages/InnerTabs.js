import React, { useState } from "react";
import "./InnerTabs.css";

const InnerTabs = (props) => {
  const [tabSelected, setTabSelected] = useState(1);

  return (
    <div className="innerTabs">
      <div className="innerTabs__tabSelector">
        {props.children.map((child) => (
          <p
            className={
              tabSelected == props.children.indexOf(child) + 1
                ? "innerTabs__tabSelector__tabSelection tabSelector__tabSelection__active"
                : "innerTabs__tabSelector__tabSelection"
            }
            onClick={() => setTabSelected(props.children.indexOf(child) + 1)}
          >
            {child.props.tabName}
          </p>
        ))}
      </div>
      {props.children.map((child) => (
        <div
          className={
            tabSelected == props.children.indexOf(child) + 1
              ? "innerTabs__tabContent__active"
              : "innerTabs__tabContent"
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default InnerTabs;
