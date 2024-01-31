import React from 'react'
import "./contactform.css"

function Contactform() {
  return (
    <div className='contact-form-main'>
      <div className='contact-form-body wrapper'>
        <div className='contact-form-left'>
          <div className="contact-form-top">
            Design your custom contact forms with this Houzez Elementor custom widget and connect your leads with the integrated Houzez CRM.
          </div>
          <form action="">
            <div className='contact-form-name'>
              <div className='contact-form-row'>
                <label htmlFor="name">First Name <span className='mandatory'>*</span> </label>
                <input type="text" name="name" id="name" placeholder='Enter your name'/>
              </div>
              <div className='contact-form-row'>
                <label htmlFor="lastName" >Last Name <span className='mandatory'>*</span></label>
                <input type="text" name="lastName" id="lastName" placeholder='Enter your last name' />
              </div>
            </div>
            <label htmlFor="email">Email <span className='mandatory'>*</span></label>
            <input type="email" name="email" id="emal" placeholder='Email' />
            <label htmlFor="textArea">Message <span className='mandatory'>*</span></label>
            <textarea name="message" id="message"  rows="4" placeholder='Message'></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-form-right">
          <div className='contact-inquiries'>
            <strong>For inquiries contact:</strong> <br /><br />
            <strong>Amy Miller</strong> <br />
            Public Relations Manager
            774 NE 84th St Miami, FL 33879
            amy.miller@houzez.com <br /> <br />
            <strong>Kyle Parker</strong> <br />
            Public Relations Associated
            774 NE 84th St Miami, FL 33879
            kyle.parker@houzez.com</div>
          <div className='contact-form-address'>
            <strong>Corporate Headquarters</strong><br />
            1584 Biscayne Boulevard <br />
            Miami FL, 33176</div>
          <div className='social-media-icons'>
            <div className='icon facebook'><i className='fab fa-facebook'></i></div>
            <div className='icon twitter'><i className='fab fa-twitter'></i></div>
            <div className='icon youtube'><i className='fab fa-youtube'></i></div>
            <div className='icon linkedin'><i className='fab fa-linkedin'></i></div>
            <div className='icon instagram'><i className='fab fa-instagram'></i></div>
            <div className='icon skype'><i className='fab fa-skype'></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactform