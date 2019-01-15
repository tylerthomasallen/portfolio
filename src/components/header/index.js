import React, { Component } from 'react';
import tyler from './tyler.jpg';
import Contact from '../contact';

class Header extends Component {
  render() {
    return(
      <div className="header-container">
          <img src={tyler} className="header-img"></img>
          <h1>Tyler Allen</h1>
          <div className="divide-line"></div>
          
          <Contact />
          <h3>Software Engineer</h3>
          <h3>San Francisco</h3>
      </div>

    )
  }
}

export default Header;

