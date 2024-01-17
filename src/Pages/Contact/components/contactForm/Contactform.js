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
              <div>
                <label htmlFor="name">First Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" />
              </div>
            </div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="emal" />
            <label htmlFor="textArea">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-form-right">
          <div className='contact-inquiries'>
            For inquiries contact:

            Amy Miller
            Public Relations Manager
            774 NE 84th St Miami, FL 33879
            amy.miller@houzez.com

            Kyle Parker
            Public Relations Associated
            774 NE 84th St Miami, FL 33879
            kyle.parker@houzez.com</div>
          <div className='contact-form-address'>Corporate Headquarters
            1584 Biscayne Boulevard
            Miami FL, 33176</div>
          <div>icons</div>
        </div>
      </div>
    </div>
  )
}

export default Contactform