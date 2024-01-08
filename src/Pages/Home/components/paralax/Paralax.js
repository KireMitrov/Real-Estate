import React from 'react'
import "./paralax.css"

function Paralax() {
    return (
        <div>
            <div className='paralax-background'>
                <div className='paralax-background-overlay'></div>
                <div className='paralax-line-top'></div>
                <div className='paralax-line-bottom'></div>
            </div>
            <div className='paralax-text-container'>
                <div className='paralax-text'>Houzez offers a wide range of drag-and-drop widgets to assist you in designing your pages</div>
                <div className="paralax-cards-container">
                    
                </div>
            </div>
        </div>
    )
}

export default Paralax