import React from 'react';
import "./Footer.css"; 


const Footer = () => (
    <div className="container navbar-collapse d-block d-lg-none">
        <nav className="row navbar fixed-bottom navbar-light bg-light justify-content-between ">
            <ul className="nav nav-pills ">
                <li className="nav-item">
                    <a className="nav-link footer-link" href="dank">Dank</a>
                </li>
                <li className="col-xs-3 nav-item">
                    <a className="nav-link footer-link" href="upload">Upload</a>
                </li>
                <li className="col-xs-3 nav-item">
                    <a className="nav-link footer-link" href="search">Search</a>
                </li>
                <li className="col-xs-3 nav-item">
                    <a className="nav-link footer-link" href="user">User</a>
                </li>

            </ul>
        </nav>
    </div>
);

export default Footer