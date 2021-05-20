import React from "react";

import './Home.css';
import keviilogo from "../../shared/components/Images/keviilogo.png";

const Home = (props) => {
  return (
    <React.Fragment>
      <img className="logo" src={keviilogo} />
      <h2 className="title">This is home, truly</h2>
    </React.Fragment>
  );
};

export default Home;
