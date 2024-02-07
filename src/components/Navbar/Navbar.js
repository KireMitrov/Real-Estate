import React, { useState } from 'react';
import './navbar.css';
import { navBarData } from '../../assets/data/navBarData';
import Menuitems from './components/menuItems/Menuitems';


export const Navbar = () => {

    const [ showFavorites, SetShowFavorites] = useState(false);
    console.log(showFavorites)
    const depthLevel = 0;

    return (

        <header className='header-main id="header"'>
            <div className='header-container'>
                <div className="logo">
                    <a href="/">
                        <img src="https://default.houzez.co/wp-content/uploads/2016/03/logo-houzez-white.png" alt="logo" />
                    </a>
                </div>
                <div className="main-nav">
                    <ul className='main-nav-ul'>
                        {navBarData.map((item, index) => (
                            <Menuitems items={item} key={index} depthLevel={depthLevel}></Menuitems>
                        ))}
                    </ul>
                </div>
                <div className="login-section">
                    <ul className='login-section-ul'>
                        <li className='login-icon' id='login-icon' onMouseEnter={() => SetShowFavorites(true)} onMouseLeave={() => SetShowFavorites(false)} >
                            <i class="fa-regular fa-circle-user" ></i>
                            <div className={`favorites ${ showFavorites ? "show-favorites" : ""}`}>
                                <i className='fa-regular fa-heart'></i>
                                FAVORITES
                                <span className='favorites-number'> 0 </span>
                            </div>
                        </li>
                        <li>
                            <button href='/' className='create-listing-btn'>CREATE A LISTING</button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
