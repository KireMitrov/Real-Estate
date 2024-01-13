import React from 'react'
import "./testimonials.css"
import reviewer1 from "../../../../assets/images/homePage/reviewers/reviewer1.jpg"
import reviewer2 from "../../../../assets/images/homePage/reviewers/reviewer2.jpg"
import reviewer3 from "../../../../assets/images/homePage/reviewers/reviewer3.jpg"

function Testimonials() {
    return (
        <div className='testimonial-main-container'>
            <div className='types-text-container'>
                <h2>Testimonials</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
            <div className="testimonials-card-container">
                <div className="testimonial-card">
                    <div className='quotation'>66</div>
                    <div className="card-testimonial">Really good Theme. We can't understand how we've been living without Houzez.</div>
                    <div className="card-reviewer-container">
                        <img src={reviewer1} alt="" />
                        <div>
                            <div>by <strong>Roy Bennet</strong></div>
                            <div className='reviewer-ocupation'>Marketing Manager, Envato</div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className='quotation'>66</div>
                    <div className="card-testimonial">Really good Theme. We can't understand how we've been living without Houzez.</div>
                    <div className="card-reviewer-container">
                        <img src={reviewer2} alt="" />
                        <div>
                            <div>by <strong>Roy Bennet</strong></div>
                            <div className='reviewer-ocupation'>Marketing Manager, Envato</div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className='quotation'>66</div>
                    <div className="card-testimonial">Really good Theme. We can't understand how we've been living without Houzez.</div>
                    <div className="card-reviewer-container">
                        <img src={reviewer3} alt="" />
                        <div>
                            <div>by <strong>Roy Bennet</strong></div>
                            <div className='reviewer-ocupation'>Marketing Manager, Envato</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials