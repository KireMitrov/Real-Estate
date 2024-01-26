import React from 'react'
import "./agents.css"
import { Fade } from "react-awesome-reveal"
import agent1 from "../../../../assets/images/homePage/agents/agent1.jpg"
import agent2 from "../../../../assets/images/homePage/agents/agent2.jpg"
import agent3 from "../../../../assets/images/homePage/agents/agent3.jpg"
import agent4 from "../../../../assets/images/homePage/agents/agent4.jpg"

function Agents() {
    return (
        <div className='agents-main-container'>
            <Fade duration={2500}>
                <div className='types-text-container'>
                    <h2>Meet Our Agents</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
            </Fade>
            <div className="agents-card-container">
                <div className='agent-card'>
                    <img src={agent1} alt="" />
                    <div className='agent-name'>Samuel Palmer</div>
                    <div className='agent-title'>Company Agent , Modern House Real Estate</div>
                    <div className='agent-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dolores dignissimos iusto a quae?...</div>
                    <div className='agent-link'>View Profile</div>
                </div>
                <div className='agent-card'>
                    <img src={agent2} alt="" />
                    <div className='agent-name'>Vincent Fuller</div>
                    <div className='agent-title'>Company Agent , Country House Real Estate</div>
                    <div className='agent-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dolores dignissimos iusto a quae?...</div>
                    <div className='agent-link'>View Profile</div>
                </div>
                <div className='agent-card'>
                    <img src={agent3} alt="" />
                    <div className='agent-name'>Brittany Watkins</div>
                    <div className='agent-title'>Company Agent , All American Real Estate</div>
                    <div className='agent-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dolores dignissimos iusto a quae?...</div>
                    <div className='agent-link'>View Profile</div>
                </div>
                <div className='agent-card'>
                    <img src={agent4} alt="" />
                    <div className='agent-name'>Michelle Ramirez</div>
                    <div className='agent-title'>Company Agent , Modern House Real Estate</div>
                    <div className='agent-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dolores dignissimos iusto a quae?...</div>
                    <div className='agent-link'>View Profile</div>
                </div>
            </div>
        </div>
    )
}

export default Agents