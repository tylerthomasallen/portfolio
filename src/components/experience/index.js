import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return(
      <div className="resume-section">
        <h1>Experience</h1>

        <div>
          <div className="project-title">
            <h3>Account Executive, Integrations Engeering</h3>
            <span>Feb 2017 - Jul 2018</span>
          </div>

          <span>Branch.io</span>

          <ul>
            <li>Promoted twice and averaged 120% to goal due to ability to learn quickly, execute and navigate change. </li>
            <li>Responded to tickets and helped partners debug integrating Branch's mobile sdk and on the Integrations Engineering team in order to acquire deep technical knowledge of Branch’s product.</li>
            <li>Led Growth Team, which included designing and implementing a month long sales and technical skills training and experience managing a team. </li>
          </ul>
        </div>

        <div>
          <div className="project-title">
            <h3>Account Executive</h3>
            <span>Jul 2015 - Apr 2016</span>
          </div>

          <span>TubeMogul</span>

          <ul>
            <li>Responsible for bringing in over $250k in revenue.</li>
            <li>Led new company initiative by specializing in mobile app install focused campaigns, helping partners drive return on investment, retention rates and conversion rates.</li>
            <li>Established relationships with inbound and outbound mid-market brands and agencies.</li>
            <li>Awarded the role of ‘Buddy,’ where I trained new hires in industry knowledge, company culture and sales skills.</li>
            <li>Provided account management for partners including detailed proposals, campaign setup, platform training, and optimization. </li>
          </ul>
        </div>

        <div>
          <div className="project-title">
            <h3>Sales Development Rep</h3>
            <span>Sep 2014 - June 2015</span>
          </div>

          <span>TubeMogul</span>

          <ul>
            <li>Responsible for prospecting and procuring meetings with brands spending over $5 Million annually in digital advertising.</li>
            <li>Led sales class and consistently exceeded quota, setting over 75 enterprise meetings, which led to being promoted within ten months.</li>
            <li>Gained knowledge of the video and display programmatic landscape, including demand side platforms, supply side platforms, data management platforms, exchanges, ad networks, publishers, brands and agencies</li>
          </ul>
        </div>

        
      </div>
    )
  }
}

export default Experience;