import React, { useContext } from "react";

import "./Home.css";
import keviilogo from "../../shared/components/Images/keviilogo.png";
import { LoginContext } from "../../shared/context/LoginContext";

const Home = (props) => {
  const auth = useContext(LoginContext);
  return (
    <React.Fragment>
      <img className="logo" src={keviilogo} alt="Logo of KEVII Hall" />
      <h2 className="title">This is home, truly</h2>
      {auth.isLoggedIn && <h3>you are now logged in</h3>}
    </React.Fragment>
  );
};

export default Home;
