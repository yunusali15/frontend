import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { LoginContext } from "../../context/LoginContext";
import "./NavLinks.css";

const NavLinks = (props) => {
  // the component will rerender whenever the context changes.
  // auth is an object that holds the isLoggedIn status and the login logout methods
  const auth = useContext(LoginContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/finance">Finance</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/cca">CCA</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/vbs">VBS</NavLink>
      </li>
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/login">Login in</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>Log out</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
