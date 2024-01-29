import React from 'react'
import "./types.css"
import img1 from "../../../../assets/images/homePage/types/type1.jpg"
import img2 from "../../../../assets/images/homePage/types/type2.jpg"
import img3 from "../../../../assets/images/homePage/types/type3.jpg"
import img4 from "../../../../assets/images/homePage/types/type4.jpg"
import img5 from "../../../../assets/images/homePage/types/type5.jpg"
import img6 from "../../../../assets/images/homePage/types/type6.jpg"
import img7 from "../../../../assets/images/homePage/types/type7.jpg"
import img8 from "../../../../assets/images/homePage/types/type8.jpg"
import img9 from "../../../../assets/images/homePage/types/type9.jpg"

function Types() {
  return (
    <div className='types-main.container'>
        <div className='types-text-container'>
            <h2>Display Different Content Types</h2>
            <p>The Houzez Grids widgets allow you to display property cities, types, status, etc within different grid style variations, colors and typography options</p>
        </div>
        <div className='types-img-main-container'>
            <div className='types-column'>
                <div className='types-card'>
                    <div className='types-card-text'>
                        <div className='types-card-text-title'>APARTMENT</div>
                        <div>10 PROPERTIES</div>
                    </div>
                    <img src={img1} alt="" />
                </div>
                <div className='types-card'>
                    <div className='types-card-text'>
                        <div className='types-card-text-title'>APARTMENT</div>
                        <div>10 PROPERTIES</div>
                    </div>
                    <img src={img2} alt="" />
                </div>
                <div className='types-card'>
                    <div className='types-card-text'>
                        <div className='types-card-text-title'>APARTMENT</div>
                        <div>10 PROPERTIES</div>
                    </div>
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className='types-column'>
                <div className='types-card'>
                    <div className='types-card-text'>
                        <div className='types-card-text-title'>APARTMENT</div>
                        <div>10 PROPERTIES</div>
                    </div>
                    <img src={img4} alt="" />
                </div>
                <div className='types-card'>
                    <div className='types-card-text'>
                        <div className='types-card-text-title'>APARTMENT</div>
                        <div>10 PROPERTIES</div>
                    </div>
                    <img src={img5} alt="" />
                </div>
                <div className='types-card'>
                    <div className='types-card-text'>
                        <div className='types-card-text-title'>APARTMENT</div>
                        <div>10 PROPERTIES</div>
                    </div>
                    <img src={img6} alt="" />
                </div>
            </div>
            <div className='types-column'>
                <div className='types-card'>
                    <div className='types-card-text'>
                        <div className='types-card-text-title'>APARTMENT</div>
                        <div>10 PROPERTIES</div>
                    </div>
                    <img src={img7} alt="" />
                </div>
                <div className='types-card'>
                    <div className='types-card-text'>
                        <div className='types-card-text-title'>APARTMENT</div>
                        <div>10 PROPERTIES</div>
                    </div>
                    <img src={img8} alt="" />
                </div>
                <div className='types-card'>
                    <div className='types-card-text'>
                        <div className='types-card-text-title'>APARTMENT</div>
                        <div>10 PROPERTIES</div>
                    </div>
                    <img src={img9} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Types