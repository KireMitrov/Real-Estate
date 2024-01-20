import React from 'react';
import './navbar.css';
import { navBarData } from '../../assets/data/navBarData';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    console.log(navBarData);


    return (
        <header className='header-main'>
            <div className='header-container'>
                <div className="logo">
                    <a href="/">
                        <img src="https://default.houzez.co/wp-content/uploads/2016/03/logo-houzez-white.png" alt="logo" />
                    </a>
                </div>
                <div className="main-nav">
                    <ul>
                        {navBarData.map((item) => (
                            <li key={item.name}>
                                <a href="">{item.title}</a>
                                <span className='arrow down'></span>
                            </li>
                        ))}
                        <li><Link to="/contact">CONTACT</Link></li>
                        <li><Link to="/about">ABOUT US</Link></li>
                    </ul>
                </div>
                <div className="login-section">
                    <ul>
                        <li><i class="fa-regular fa-circle-user"></i></li>
                        <li>
                            <button href='/' className='create-listing-btn'>CREATE A LISTING</button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
