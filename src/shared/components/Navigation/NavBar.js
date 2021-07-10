import React, { Component } from 'react';
import "./NavBar.css";
import {MenuItems} from "./MenuItems";

class Navbar extends Component {
    render() {
        return(
            <nav className= "NavbarItems">
                <h1 className="navbar-name">KE WEB</h1>
                <ul className='nav-menu'>
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
