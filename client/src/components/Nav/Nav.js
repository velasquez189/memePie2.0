import React from 'react';
import "./Nav.css";

var userName = localStorage.getItem("CognitoIdentityServiceProvider.18kp0d0foqkulkcf15kab8r4sm.LastAuthUser")



const Nav = () => (
    <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-light'>
        <a className='navbar-brand' href='/'>memePie</a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/dank">Dank</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/upload">Upload</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/search">Search</a>
                </li>
            </ul>
            <p className="user-name">
                {userName}
                </p>

        </div>
    </nav>
);

export default Nav 