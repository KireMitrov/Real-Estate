import React from 'react'
import "./contact.css"
import Footer from '../../components/Footer/Footer'
import Topsection from './components/topSection/Topsection'
import Maps from './components/map/Maps'
import Contactform from './components/contactForm/Contactform'

function Contact() {
  return (
    <div>
      <div className='contact-navbar-bg'></div>
      <Topsection />
      <Contactform />
      <Maps />
      <Footer />
    </div>
  )
}

export default Contact