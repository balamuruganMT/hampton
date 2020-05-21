import React, { Component } from 'react';
import './Header.css';
import Logo from '../../images/logo.png';
import Profile from '../../images/profile.svg';
import Background from '../../images/background.jpeg';
import search from '../../images/search.svg';

class Header extends Component {
    render() {
        return (
            <div className="mainWrapper">
                <div className="header" style={{ backgroundImage: `url(${Background})` }}>
                    <div className="headercontainer">
                        <div className="d-flex">
                            <div className="logo">
                                <img src={Logo} alt="Logo" height="50" />
                            </div>
                            <div className="title">
                                <h3>AI  Data Platform</h3>
                            </div>
                            <div className="navRight">
                                <div className="search">
                                    <input type="text" name="search" placeholder="search" />
                                    <span><img src={search} width="16" alt="search" /></span>
                                </div>
                                <div className="profile">
                                    <img src={Profile} alt="Profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;