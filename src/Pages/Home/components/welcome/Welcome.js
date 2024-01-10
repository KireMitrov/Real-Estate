import React from 'react';
import "./welcome.css";

function Welcome() {
    return (
        <div className='welcome-main-container'>
            <div className="background-overlay"></div>
            <ul class="slideshow">
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
            </ul>
            <div className="welcome-text">
                <h2>Welcome to Houzez 2.0</h2>
                <p>Packed with 100+ new features and improvements, it is the biggest <br></br>all-in-one solution for real estate companies and professionals</p>
            </div>
            <div className='welcome-cards-container'>
                <div className='welcome-cards-wrapper'>
                    <div className='welcome-card'>
                        <div className='welcome-card-title'>Easy to get started</div>
                        <div className='welcome-card-text'>Get ready to launch your realty site in minutes without any previous experience</div>
                        <div className='welcome-card-link'>Learn more</div>
                    </div>
                    <div className='welcome-card'>
                        <div className='welcome-card-title'>Highly customizable</div>
                        <div className='welcome-card-text'>Customize the site to your expectations by using all of the theme features</div>
                        <div className='welcome-card-link'>Learn more</div>
                    </div>
                    <div className='welcome-card'>
                        <div className='welcome-card-title'>Drag-and-drop based</div>
                        <div className='welcome-card-text'>design your page by simply dragging the features using Elementor page builder</div>
                        <div className='welcome-card-link'>Learn more</div>
                    </div>
                </div>
            </div>
                    <div className='welcome-line-bottom'></div>
        </div>
    )
}

export default Welcome