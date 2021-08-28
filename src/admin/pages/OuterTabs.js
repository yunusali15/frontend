import React, { useState } from "react";
import "./OuterTabs.css";
import InnerTabs from "./InnerTabs.js";

const OuterTabs = (props) => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="outertabs">
      <div className="outertabs__tabSelector">
        {props.children.map((child) => (
          <p
            className={
              selectedTab == props.children.indexOf(child) + 1
                ? "outertabs__tabSelector__tabSelection tabSelection__active"
                : "outertabs__tabSelector__tabSelection"
            }
            onClick={() => setSelectedTab(props.children.indexOf(child) + 1)}
          >
            {child.props.tabName}
          </p>
        ))}
      </div>
      {props.children.map((child) => (
        <div
          className={
            selectedTab == props.children.indexOf(child) + 1
              ? "outertabs__tab__active"
              : "outertabs__tab"
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default OuterTabs;
