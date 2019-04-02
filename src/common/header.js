import React from "react";

function isActive(path) {
    return window.location.pathname === path ? 'active':'';
}

const Header = () =>
    (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <a className={`nav-link ${isActive('/')}`} href="/">Home</a>
                    </li>
                    <li className="nav-item ">
                        <a className={`nav-link ${isActive('/users')}`} href="/users">Users</a>
                    </li>

                    <li className="nav-item">
                        <a className={`nav-link ${isActive('/courses')}`} href="/courses">Courses</a>
                    </li>

                </ul>
            </div>
        </nav>
    );


export default Header;