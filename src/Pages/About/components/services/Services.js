import React from 'react'
import "./services.css"
import services1 from "../../../../assets/images/homePage/slider/home1.jpg"

function Services() {
  return (
    <div className='wrapper'>
        <div className="about-header">
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div className="services-main-container">
          <div className="services-card">
            <img src={services1} alt="" />
            <img src={services1} alt="" />
          </div>
          <div className="services-card">
            <img src={services1} alt="" />
            <img src={services1} alt="" />
          </div>
          <div className="services-card">
            <img src={services1} alt="" />
          </div>
          <div className="services-card">
            <img src={services1} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Services