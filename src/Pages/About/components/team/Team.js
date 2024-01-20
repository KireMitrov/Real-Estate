import React from 'react'
import "./team.css"
import team1 from "../../../../assets/images/aboutPage/team1.jpg"
import team2 from "../../../../assets/images/aboutPage/team2.jpg"
import team3 from "../../../../assets/images/aboutPage/team3.jpg"
import team4 from "../../../../assets/images/aboutPage/team4.jpg"

function Team() {

  return (
    <div className='teams-main-container'>
      <div className='wrapper'>
        <div className="about-header">
          <h2>Meet our Team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div className='team-card-container'>
          <div className='team-card'>
            <img src={team1} alt="team member" />
            <div class="team-content">
              <div>
                <strong>Kathleen Grant</strong>
              </div>
              <div>Funder</div>
            </div>
          </div>
          <div className='team-card'>
            <img src={team2} alt="team member" />
            <div class="team-content">
              <div>
                <strong>Keith Bailey</strong>
              </div>
              <div>CEO</div>
            </div>
          </div>
          <div className='team-card'>
            <img src={team3} alt="team member" />
            <div class="team-content">
              <div>
                <strong>Danielle Murray</strong>
              </div>
              <div>Manager</div>
            </div>
          </div>
          <div className='team-card'>
            <img src={team4} alt="team member" />
            <div class="team-content">
              <div>
                <strong>Thomas Stevens</strong>
              </div>
              <div>Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team