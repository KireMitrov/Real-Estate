import React from 'react'
import "./footer.css"


function Footer() {

    return (
        <footer>
            <div className="footer-top-container">
                <div className="footer-top-row">
                    <div className="row1">
                        <div className="footer-row-header">About Site</div>
                        <div className="footer-row-body">
                            <div className="footer-row-content">Houzez is a premium WordPress theme for real estate where modern aesthetics are combined with tasteful simplicity.</div>
                            <div className="footer-row-link"><a href="/">Read more</a></div>
                        </div>
                    </div>
                    <div className="row1">
                        <div className="footer-row-header">Contact Us</div>
                        <div className="footer-row-body">
                            <div className="footer-row-content">
                                <div className='footer-contact'><i class="fa-solid fa-location-dot"></i> 774 NE 84th St Miami, FL 33879</div>
                                <div className='footer-contact'><i class="fa-solid fa-phone"></i> +1 (800) 990 8877</div>
                                <div className='footer-contact'><i class="fa-regular fa-envelope"></i> email@email.com</div>
                            </div>
                            <div className="footer-row-link"><a href="contact">Contact us</a></div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="footer-row-header">Newsletter</div>
                        <input type="email" name="email" id="email" placeholder='Enter your email' />
                        <button>Submit</button>
                        <div className="footer-row-content">Houzez is a premium WordPress theme for real estate where modern aesthetics are combined with tasteful simplicity.</div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-container">
            <div className="footer-bottom-row">
                <div>© Houzez - All rights reserved</div>
                <div>
                    <ul>
                        <li>Privacy</li>
                        <li>Terms and Conditions</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <span><i class="fa-brands fa-facebook-f"></i></span>
                    <span><i class="fa-brands fa-twitter"></i></span>
                    <span><i class="fa-brands fa-google-plus-g"></i></span>
                    <span><i class="fa-brands fa-linkedin-in"></i></span>
                    <span><i class="fa-brands fa-instagram"></i></span>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer