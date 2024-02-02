import React from 'react'
import "./team.css"
import team1 from "../../../../assets/images/aboutPage/team1.jpg"
import team2 from "../../../../assets/images/aboutPage/team2.jpg"
import team3 from "../../../../assets/images/aboutPage/team3.jpg"
import team4 from "../../../../assets/images/aboutPage/team4.jpg"

function Team() {

  const agents = [
    {
      img: team1,
      name: "Kathleen Grant",
      ocupation: "Funder",
    },
    {
      img: team2,
      name: "Keith Bailey",
      ocupation: "CEO",
    },
    {
      img: team3,
      name: "Danielle Murray",
      ocupation: "Manager",
    },
    {
      img: team4,
      name: "Thomas Stevens",
      ocupation: "Manager",
    },
  ]

  return (
    <div className='teams-main-container'>
      <div className='wrapper'>
        <div className="about-header">
          <h2>Meet our Team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div className='team-card-container'>
          {agents.map((agent) => (
            <div className='team-card'>
              <div className='team-card-overlay'>
                <img src={agent.img} alt="team member" />
                <div class="member-name">
                  <div>
                    <strong>{agent.name}</strong>
                  </div>
                  <div>{agent.ocupation}</div>
                </div>
                <div className='member-description'>
                  <div>
                    <div><strong>{agent.name}</strong></div>
                    <div>{agent.ocupation}</div>
                  </div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada, odio sit amet pharetra vehicula, sapien leo egestas magna, vitae auctor diam magna cursus arcu. </div>
                  <div className='team-social-media'>
                    <i className='fab fa-facebook-f'></i>
                    <i className='fab fa-twitter'></i>
                    <i className='fab fa-linkedin-in'></i>
                    <i className='fab fa-pinterest-p'></i>
                    <i className='fab fa-google-plus-g'></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team