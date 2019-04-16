import React from "react";
import {NavLink} from "react-router-dom";

function isActive(path) {
    return window.location.pathname === path ? 'active':'';
}

const Header = () =>
    (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <NavLink className={`nav-link ${isActive('/')}`} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className={`nav-link ${isActive('/users')}`} to="/users">Users</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className={`nav-link ${isActive('/courses')}`} to="/courses">Courses</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );


export default Header;