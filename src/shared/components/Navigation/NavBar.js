import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <div className="nav-menu">
          <Link className="navbar-name" to="/">
            KE WEB
          </Link>
          <div className="navbar-right">
            {MenuItems.map((item, index) => {
              return (
                <Link className={item.cName} to={item.url}>
                  <p>{item.title}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
