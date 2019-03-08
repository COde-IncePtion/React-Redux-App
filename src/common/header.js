import React from "react";
import {Link} from 'react-router-dom';

const Header = () =>
    (
        <div>
            <ul className="nav nav-pills">
                <li role="presentation"><Link to="/">Home</Link></li>
                <li role="presentation"><Link to="users">Users</Link></li>
                <li role="presentation"><Link to="add-course">Add Course</Link></li>
            </ul>
        </div>
    );


export default Header;