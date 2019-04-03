import React, { Component } from 'react';
import "./Nav.css";

var userName = localStorage.getItem("CognitoIdentityServiceProvider.18kp0d0foqkulkcf15kab8r4sm.LastAuthUser")



class Nav extends Component {
    state = {
        userName: userName
    }

    componentDidUpdate

    render() {
        return (
            <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-light'>
                <a className='navbar-brand' href='/fresh'>memePie</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/fresh">Fresh</a>
                        </li>
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

                </div>
                <p className="user-name">
                    <a className="nav-link" href="/user">{userName ? this.state.userName : "User"}</a>
                </p>
            </nav>
        )
    }
};

export default Nav 