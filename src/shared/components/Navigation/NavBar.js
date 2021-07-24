import React, { Component } from 'react';
import "./NavBar.css";
import {MenuItems} from "./MenuItems";

class Navbar extends Component {
    render() {
        return(
            <nav className= "NavbarItems">
                <div className="navbar-name">KE WEB</div>
                <div className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className = {item.cName} href = {item.url}>
                                {item.title} </a> 
                            </li>
                        )
                    })}
                </div>
            </nav>
        )
    }
}

export default Navbar
