import React from 'react'
import { Fade } from 'react-awesome-reveal'
import "./about.css"
import Testimonials from "../Home/components/testimonials/Testimonials"
import Footer from '../../components/Footer/Footer'
import Services from './components/services/Services'
import Team from './components/team/Team'
import Blog from './components/blog/Blog'

function About() {

    return (
        <div>
            <Fade duration={2500}>
                <section className='about-top-container'>
                    <div className="contact-background-overlay"></div>
                    <h1>About us</h1>
                </section>
            </Fade>
            <Fade duration={2500}>
                <section>
                    <div className='wrapper about-text'>
                        <div className="about-text-header">Your Vision Unrestricted</div>
                        <div className="about-text-body">
                            <div className='row'>
                                <div><strong>Houzez is a premium WordPress theme for real estate agents and agencies</strong> where modern aesthetics are combined with a tasteful simplicity and where the ease of use is achieved without compromise in your ability to customize the design.</div>
                                <div>Whether you are a real estate agent looking to build a website for your company or a web developer seeking a perfect WordPress theme for your next project, you are certain to appreciate the numerous features and benefits that our theme provides.</div>
                            </div>
                            <div className='row'>
                                <div>Houzez is also a WordPress-based property management system which allows you to own and maintain a real estate marketplace, coordinate your agents, accept submissions and offer membership packages.</div>
                                <div>Unlike many other real estate themes which confine you to a handful of predefined layouts, <strong>Houzez offers a limitless array of possibilities to structure and style your content.</strong> All of the customization options are logically organized in your WordPress admin panel and thorough customization in the provided documentation.</div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
            <Team />
            <Services />
            <Blog />
            <div className='contact-navbar-bg'></div>
            <Testimonials />
            <Footer />
        </div>
    )
}

export default About