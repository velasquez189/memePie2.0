import React from 'react'

const Nav = () => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <a className='navbar-brand' href='/'>memePie</a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Dank</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="upload">Upload</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav