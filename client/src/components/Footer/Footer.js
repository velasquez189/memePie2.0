import React from 'react';
import "./Footer.css";


const Footer = () => (
    <div className="container navbar-collapse d-block d-lg-none">
        <nav className="row navbar fixed-bottom navbar-light bg-light justify-content-between ">
            <ul className="nav ">
                <li className="col-md-3 nav-item">
                    <a className="nav-link footer-link" href="fresh">Frsh</a>
                </li>
                <li className="col-md-3 nav-item">
                    <a className="nav-link footer-link" href="dank">Dnk</a>
                </li>
                <li className="col-md-3 nav-item">
                    <a className="nav-link footer-link" href="upload">Upld</a>
                </li>
                <li className="col-md-3 nav-item">
                    <a className="nav-link footer-link" href="search">Srch</a>
                </li>
            </ul>
        </nav>
    </div>
);

export default Footer