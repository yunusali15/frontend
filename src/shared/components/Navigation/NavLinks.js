import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
    return ( 
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/finance">Finance</NavLink>
            </li>
            <li>
                <NavLink to="/vbs">VBS</NavLink>
            </li>
            <li>
                <NavLink to="/cca">CCA</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login in</NavLink>
            </li>
        </ul>
     );
}
 
export default NavLinks;