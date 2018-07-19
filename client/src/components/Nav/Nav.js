import React from 'react';
import "./Nav.css"; 

const Nav = () => (
    <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-light'>
        <a className='navbar-brand' href='/'>memePie</a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Dank</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="upload">Upload</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="search">Search</a>
                </li>

            </ul>
        </div>
    </nav>
);

export default Nav