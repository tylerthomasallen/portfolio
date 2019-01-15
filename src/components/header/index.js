import React, { Component } from 'react';
import tyler from './tyler.jpg';

class Header extends Component {
  render() {
    return(
      <div className="header-container">
          <img src={tyler} className="header-img"></img>
          <h1>Tyler Allen</h1>
      
      </div>

    )
  }
}

export default Header;

