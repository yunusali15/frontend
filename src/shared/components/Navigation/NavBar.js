import React, { Component } from 'react';
import "./NavBar.css";
import {MenuItems} from "./MenuItems";

class Navbar extends Component {
    render() {
        return(
            <nav className= "NavbarItems">
                <ul className='nav-menu'>
                <h1 className="navbar-name">KE WEB</h1>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className = {item.cName} href = {item.url}>
                                {item.title} </a> 
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
