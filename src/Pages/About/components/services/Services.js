import React from 'react'
import { Fade } from "react-awesome-reveal"
import "./services.css"
import services1 from "../../../../assets/images/homePage/slider/home1.jpg"
import services2 from "../../../../assets/images/homePage/layouts/layout2.jpg"
import services3 from "../../../../assets/images/homePage/layouts/layout5.jpg"
import services4 from "../../../../assets/images/homePage/types/type8.jpg"
import services5 from "../../../../assets/images/homePage/types/type3.jpg"
import services6 from "../../../../assets/images/homePage/types/type7.jpg"


function Services() {
  return (
    <div className='wrapper'>
      <Fade duration={2500}>
        <div className="about-header">
          <h2>Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
      </Fade>
      <div className="services-main-container">
        <div className="services-row">
          <div className='services-row-img' >
            <div className="properties-detail-wrap">
              <div className="properties-detail-top">
                <div className='properties-detail-subtitle'>Services</div>
                <div className='properties-detail-title' >Property Management</div>
              </div>
              <div className="properties-detail-bottom">
                <div className='properties-detail-more'>More Details</div>
                <div className='triangle'></div>
              </div>
            </div>
            <img src={services1} alt="" />
          </div>
          <div className='services-row-img' >
            <div className="properties-detail-wrap">
              <div className="properties-detail-top">
                <div className='properties-detail-subtitle'>Services</div>
                <div className='properties-detail-title' >Financial Reporting</div>
              </div>
              <div className="properties-detail-bottom">
                <div className='properties-detail-more'>More Details</div>
                <div className='triangle'></div>
              </div>
            </div>
            <img src={services2} alt="" />
          </div>
        </div>
        <div className="services-row">
          <div className='services-row-img' >
            <div className="properties-detail-wrap">
              <div className="properties-detail-top">
                <div className='properties-detail-subtitle'>Services</div>
                <div className='properties-detail-title' >Capital Improvements</div>
              </div>
              <div className="properties-detail-bottom">
                <div className='properties-detail-more'>More Details</div>
                <div className='triangle'></div>
              </div>
            </div>
            <img src={services3} alt="" />
          </div>
          <div className='services-row-img' >
            <div className="properties-detail-wrap">
              <div className="properties-detail-top">
                <div className='properties-detail-subtitle'>Services</div>
                <div className='properties-detail-title' >Business Development</div>
              </div>
              <div className="properties-detail-bottom">
                <div className='properties-detail-more'>More Details</div>
                <div className='triangle'></div>
              </div>
            </div>
            <img src={services4} alt="" />
          </div>
        </div>
        <div className="services-row">
          <div className='services-row-img' >
            <div className="properties-detail-wrap">
              <div className="properties-detail-top">
                <div className='properties-detail-subtitle'>Services</div>
                <div className='properties-detail-title' >Finance Real Estate</div>
              </div>
              <div className="properties-detail-bottom">
                <div className='properties-detail-more'>More Details</div>
                <div className='triangle'></div>
              </div>
            </div>
            <img src={services5} alt="" />
          </div>
        </div>
        <div className="services-row">
          <div className='services-row-img' >
            <div className="properties-detail-wrap">
              <div className="properties-detail-top">
                <div className='properties-detail-subtitle'>Services</div>
                <div className='properties-detail-title' >Recover Asset Value</div>
              </div>
              <div className="properties-detail-bottom">
                <div className='properties-detail-more'>More Details</div>
                <div className='triangle'></div>
              </div>
            </div>
            <img src={services6} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services