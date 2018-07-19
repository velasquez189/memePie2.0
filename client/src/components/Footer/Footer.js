import React from 'react';
import "./Footer.css"; 


const Footer = () => (
    <div className="container navbar-collapse d-block d-lg-none">
        <nav className="navbar fixed-bottom navbar-light bg-light justify-content-between ">
            <ul className="nav nav-pills ">
                <li className="nav-item">
                    <a className="nav-link footer-link" href="/">Dank</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link footer-link" href="upload">Upload</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link footer-link" href="search">Search</a>
                </li>

            </ul>
        </nav>
    </div>
);

export default Footer