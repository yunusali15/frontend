import React, { useContext } from "react";

import "./Home.css";
import { LoginContext } from "../../shared/context/LoginContext";
import homepage from "./homepage.png";

const Home = (props) => {
  const auth = useContext(LoginContext);
  return (
    <React.Fragment>
      <div className="homeContainer">
        <div className="ctaContainer">
          <text className="title">
            By KEVIIANS,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; For KEVIIANS
          </text>
          <a href="/vbs" className="cta">
            Try Our Venue Booking System
          </a>
        </div>
        <img className="homepageImage" src={homepage} />
      </div>
      {/* {auth.isLoggedIn && <h3>you are now logged in</h3>} */}
    </React.Fragment>
  );
};

export default Home;
