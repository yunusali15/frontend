import React, { useState } from "react";
import "./OuterTabs.css";

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
          <h1>{"hello " + (props.children.indexOf(child) + 1)}</h1>
          {child}
        </div>
      ))}
    </div>
  );
};

export default OuterTabs;
