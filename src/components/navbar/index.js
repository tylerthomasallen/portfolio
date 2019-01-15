import React, { Component } from 'react';
import './styles.scss';

class NavBar extends Component {

  render() {
    return(
      <div className="navbar-container">

      <div className="navbar-left">
        <h1>
          Tyler Allen
        </h1>
      </div>

      <div className="navbar-right">
          <a href="https://www.google.com/">Projects</a>
          <a href="https://www.google.com/">Resume</a>
          <a href="https://www.google.com/">Recommendations</a>
          <a href="https://www.google.com/">Contact</a>
      </div>

      </div>
    )
  }
}

export default NavBar;