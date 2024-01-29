import React from 'react'
import "./paralax.css"
import { Fade } from 'react-awesome-reveal'
import icon1 from '../../../../assets/images/homePage/paralax/icon1.png'
import icon2 from '../../../../assets/images/homePage/paralax/icon2.png'
import icon3 from '../../../../assets/images/homePage/paralax/icon3.png'
import icon4 from '../../../../assets/images/homePage/paralax/icon4.png'

function Paralax() {
    return (
        <div>
            <div className='paralax-background'>
                <div className='paralax-background-overlay'></div>
                <div className='paralax-line-top'></div>
                <div className='paralax-line-bottom'></div>
            </div>
            <div className='paralax-body-container'>
                <Fade duration={2500}>
                    <div className='paralax-text'>Houzez offers a wide range of drag-and-drop widgets to assist you in designing your pages</div>
                </Fade>
                <div className="paralax-cards-container">
                    <div className='paralax-card'>
                        <img src={icon1} alt="icon search" />
                        <div className='paralax-card-text'>LOOKING TO BUY</div>
                    </div>
                    <div className='paralax-card'>
                        <img src={icon2} alt="icon sell" />
                        <div className='paralax-card-text'>SELL YOUR HOME</div>
                    </div>
                    <div className='paralax-card'>
                        <img src={icon3} alt="icon rent" />
                        <div className='paralax-card-text'>RENT A PLACE</div>
                    </div>
                    <div className='paralax-card'>
                        <img src={icon4} alt="icon help" />
                        <div className='paralax-card-text'>NEED HELP?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paralax