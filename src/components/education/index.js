import React, { Component } from 'react';

class Education extends Component {

  render() {
    return(
      <div className="resume-section">
        <h2>Education</h2>

        <div className="resume-section-child">
          <div className="project-title">
            <h3>App Academy</h3>
            <span>Aug 2018 - Nov 2018</span>
          </div>

          <span>1000-hour immersive full-stack web development intensive bootcamp focused on Ruby, Rails, Javascript, Node, Express, SQL, PostgreSQL, MongoDB, HTML, CSS, Test-drive deployment, Object-oriented programming, and pair-programming.</span>
        </div>

        <div className="resume-section-child">
          <div className="project-title">
            <h3>Stanford</h3>
            <span>Jun 2016 - Aug 2016</span>
          </div>

          <span>CS105A - Object-oriented design in Java</span>
        </div>

        <div className="resume-section-child">
          <div className="project-title">
            <h3>Colorado College</h3>
            <span>Aug 2010 - May 2014</span>
          </div>

          <div className="education-child">
            <span>Bachelor of Arts, International Political Economy 
            </span>

            <span>Men’s Varsity Lacrosse Captain</span>
            <span>Abroad Experience: Turkey & Chile</span>
          </div>

        </div>

        
        


      </div>
    )
  }
}

export default Education;