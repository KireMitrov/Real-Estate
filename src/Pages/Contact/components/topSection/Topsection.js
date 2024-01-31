import React from 'react'
import "./topsection.css"
import { Fade } from "react-awesome-reveal"

function Topsection() {
    return (
        <Fade duration={2500}>
            <section className='contact-top-container'>
                <div className="contact-background-overlay"></div>
                <h1>Contact us</h1>
            </section>
        </Fade>
    )
}

export default Topsection