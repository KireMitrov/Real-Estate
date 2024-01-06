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
                <p>Packed with 100+ new features and improvements, it is the biggest all-in-one solution for real estate companies and professionals</p>
            </div>
            <div className='welcome-cards-container'>
                <div className='welcome-cards-wrapper'>
                    <div className='welcome-card'>
                        <div>Easy to get started</div>
                        <div>Get ready to launch your realty site in minutes without any previous experience</div>
                        <div>Learn more</div>
                    </div>
                    <div className='welcome-card'>
                        <div>Highly customizable</div>
                        <div>Customize the site to your expectations by using all of the theme features</div>
                        <div>Learn more</div>
                    </div>
                    <div className='welcome-card'>
                        <div>Drag-and-drop based</div>
                        <div>design your page by simply dragging the features using Elementor page builder</div>
                        <div>Learn more</div>
                    </div>
                </div>
                    <div className='welcome-line-bottom'></div>
            </div>
        </div>
    )
}

export default Welcome