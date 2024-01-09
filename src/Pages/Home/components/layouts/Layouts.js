import React from 'react'
import "./layouts.css"
import layout1 from "../../../../assets/images/homePage/layouts/layout1.jpg"
import layout2 from "../../../../assets/images/homePage/layouts/layout2.jpg"
import layout3 from "../../../../assets/images/homePage/layouts/layout3.jpg"
import layout4 from "../../../../assets/images/homePage/layouts/layout4.jpg"
import layout5 from "../../../../assets/images/homePage/layouts/layout5.jpg"
import layout6 from "../../../../assets/images/homePage/layouts/layout6.jpg"



function Layouts() {


  return (
    <div className='layouts-container'>
      <div className='layout-row'>
        <div>
          <h2>You Can Design Clean And Modern Grid Layouts</h2>
          <p>Grids are the backbone of all layouts, infographics and presentations</p>
        </div>
        <div>
          <img src={layout1} alt="" />
        </div>
      </div>
      <div className='layout-row'>
        <div>
          <img src={layout2} alt="" />
        </div>
        <div>
          <img src={layout3} alt="" />
        </div>
        <div>
          <img src={layout4} alt="" />
        </div>
      </div>
      <div className='layout-row'>
        <div>
          <img src={layout5} alt="" />
        </div>
        <div>
          <img src={layout6} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Layouts