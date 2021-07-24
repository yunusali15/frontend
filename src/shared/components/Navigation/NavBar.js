import React, { Component } from "react";
import "./NavBar.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <div className="nav-menu">
          <h1 className="navbar-name">KE WEB</h1>
          <div className="navbar-right">
            {MenuItems.map((item, index) => {
              return (
                <a className={item.cName} href={item.url}>
                  {item.title}{" "}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
