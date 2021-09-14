import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav
          className={
            this.state.clicked ? "NavbarItems NavbarItemsActive" : "NavbarItems"
          }
        >
          <div className="navbar">
            <a className="navbar_KEWEB" href="/">
              KE WEB
            </a>
            <div className="navbar_menu-icon" onClick={this.handleClick}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
          <div className="nav-menu">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}{" "}
                  </a>
                </li>
              );
            })}
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
